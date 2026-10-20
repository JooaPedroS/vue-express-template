export class ControllerBase {
    static handle(callback) {
        return async (req, res, next) => {
            try {
                await callback(req, res, next);
            } catch (error) {
                next(error);
            }
        };
    }

    static success(res, data, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            data,
        });
    }
}