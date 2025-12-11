
// 這是課程的「排程表」
// 您只需要設定 START_DATE (課程開始的第一天)

export const COURSE_SCHEDULE = {
    // 設定課程開始的日期 (年, 月-1, 日) -> 月份從 0 開始，所以 10月是 9
    startDate: new Date(2023, 9, 27), 
    
    // 每日開放時間 (24小時制)
    openHour: 12, // 中午 12點
    closeHour: 24, // 晚上 12點 (隔日0點)
    
    // 課程順序定義
    examSequence: [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7",
        // "B1" removed temporarily
        "C1",
        "C2",
        "C3",
        "C4", 
    ]
};

export interface ExamStatus {
    isOpen: boolean;
    examId: string | null;
    message: string;
    title: string;
}

export const getExamStatus = (): ExamStatus => {
    const now = new Date();
    const start = COURSE_SCHEDULE.startDate;
    
    // 計算今天是課程的第幾天
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    
    const diffTime = todayMidnight.getTime() - startMidnight.getTime();
    let dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Case 1: 課程還沒開始
    if (dayIndex < 0) {
        return {
            isOpen: false,
            examId: null,
            message: "The course has not started yet.",
            title: "Welcome"
        };
    }

    // Case 2: 循環邏輯 (Infinite Loop)
    // 永遠不會出現 Course Ended，會自動循環回到開頭
    const sequenceLength = COURSE_SCHEDULE.examSequence.length;
    const safeIndex = dayIndex % sequenceLength; // 取餘數，例如第15天會變成第1天 (15 % 14 = 1)

    const examId = COURSE_SCHEDULE.examSequence[safeIndex];
    const examTitle = `GMAT Quant Snake ${examId}`;

    // Case 3: 檢查當日時間是否在 12:00 ~ 24:00
    const currentHour = now.getHours();
    
    if (currentHour < COURSE_SCHEDULE.openHour) {
        // 早於中午 12 點
        return {
            isOpen: false,
            examId: examId,
            message: `Today's practice (${examId}) opens at 12:00 PM.`,
            title: examTitle
        };
    }
    
    if (currentHour >= COURSE_SCHEDULE.closeHour) {
         return {
            isOpen: true, 
            examId: examId,
            message: "",
            title: examTitle
        };
    }

    // Case 4: 正確開放中
    return {
        isOpen: true,
        examId: examId,
        message: "",
        title: examTitle
    };
};
