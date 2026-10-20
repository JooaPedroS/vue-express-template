import { HttpError } from "../utils/HttpError.js";

export function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    const isOperational = err instanceof HttpError;

    const statusCode =
        isOperational &&
            Number.isInteger(err.statusCode) &&
            err.statusCode >= 400 &&
            err.statusCode <= 599
            ? err.statusCode
            : 500;

    if (statusCode >= 500) {
        console.error(err);
    }

    return res.status(statusCode).json({
        success: false,
        message:
            statusCode === 500
                ? "Erro interno do servidor"
                : err.message,
    });
}
