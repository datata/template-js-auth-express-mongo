export const handleError = (res, errorMessage, statusErrorCode = 500) => {
	res.status(statusErrorCode).json({
		success: false,
		message: errorMessage,
	});
};
