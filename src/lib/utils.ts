export const get_error_message = (error: unknown): string => {
  const message = error instanceof Error ? error.message : "Unknown error";

  return message;
};
