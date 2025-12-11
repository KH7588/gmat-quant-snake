import { Question } from '../types';

/**
 * Dynamically imports and returns the questions for a given exam ID.
 * This uses lazy loading to reduce the initial bundle size.
 * @param examId The ID of the exam to load (e.g., "A1", "A2").
 * @returns A promise that resolves to a Record of questions for the specified exam.
 */
export const loadExamQuestions = async (examId: string): Promise<Record<number, Question>> => {
  switch (examId) {
    case 'A1':
      const A1_module = await import('./exams/A1');
      return A1_module.EXAM_A1_QUESTIONS;
    case 'A2':
      const A2_module = await import('./exams/A2');
      return A2_module.EXAM_A2_QUESTIONS;
    case 'A3':
      const A3_module = await import('./exams/A3');
      return A3_module.EXAM_A3_QUESTIONS;
    case 'A4':
      const A4_module = await import('./exams/A4');
      return A4_module.EXAM_A4_QUESTIONS;
    // case 'B1':
    //   const B1_module = await import('./exams/B1');
    //   return B1_module.EXAM_B1_QUESTIONS;
    // Add more cases here for future exams (B2, B3, etc.)
    default:
      console.error(`Attempted to load unknown exam ID: ${examId}. Falling back to empty object.`);
      return {}; // Return an empty object for unknown exam IDs
  }
};
