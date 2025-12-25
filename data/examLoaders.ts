import { Question } from '../types.ts';

/**
 * Dynamically imports and returns the questions for a given exam ID.
 * This implementation uses a switch statement with static import paths
 * to ensure the esbuild bundler can detect and create code-split chunks
 * for each exam module at build time, resolving dynamic loading issues.
 * @param examId The ID of the exam to load (e.g., "A1", "A2").
 * @returns A promise that resolves to a Record of questions for the specified exam.
 */
export const loadExamQuestions = async (examId: string): Promise<Record<number, Question>> => {
  const sanitizedExamId = examId.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (sanitizedExamId !== examId.toUpperCase()) {
    console.error(`Invalid exam ID format provided: ${examId}`);
    return {};
  }

  try {
    switch (sanitizedExamId) {
      case 'A1': {
        const module = await import('./exams/A1.ts');
        return module.EXAM_A1_QUESTIONS;
      }
      case 'A2': {
        const module = await import('./exams/A2.ts');
        return module.EXAM_A2_QUESTIONS;
      }
      case 'A3': {
        const module = await import('./exams/A3.ts');
        return module.EXAM_A3_QUESTIONS;
      }
      case 'A4': {
        const module = await import('./exams/A4.ts');
        return module.EXAM_A4_QUESTIONS;
      }
      case 'A5': {
        const module = await import('./exams/A5.ts');
        return module.EXAM_A5_QUESTIONS;
      }
      case 'A6': {
        const module = await import('./exams/A6.ts');
        return module.EXAM_A6_QUESTIONS;
      }
      case 'A7': {
        const module = await import('./exams/A7.ts');
        return module.EXAM_A7_QUESTIONS;
      }
      case 'B1': {
        const module = await import('./exams/B1.ts');
        return module.EXAM_B1_QUESTIONS;
      }
      case 'C1': {
        const module = await import('./exams/C1.ts');
        return module.EXAM_C1_QUESTIONS;
      }
      case 'C2': {
        const module = await import('./exams/C2.ts');
        return module.EXAM_C2_QUESTIONS;
      }
      case 'C3': {
        const module = await import('./exams/C3.ts');
        return module.EXAM_C3_QUESTIONS;
      }
      case 'C4': {
        const module = await import('./exams/C4.ts');
        return module.EXAM_C4_QUESTIONS;
      }
      default:
        console.error(`No module loader found for exam ID: ${sanitizedExamId}. Please ensure it's added to the switch statement in examLoaders.ts.`);
        return {};
    }
  } catch (error) {
    console.error(`Failed to load or parse the question module for exam ID: ${sanitizedExamId}.`, error);
    return {};
  }
};