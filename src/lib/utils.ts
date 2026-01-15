export const get_error_message = (error: unknown): string => {
  const message =
    error instanceof Error
      ? error.message.replace(/firebase/gi, "Stall")
      : "Unknown error";

  return message;
};