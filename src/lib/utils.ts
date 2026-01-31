export const get_error_message = (error: unknown): string => {
  const message = error instanceof Error ? error.message || (error as any)?.error : "Unknown error";

  return message;
};
