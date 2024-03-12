import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
	try {
		const authorization = req.headers.authorization;

		if (!authorization) {
			return res.status(401).json({
				success: false,
				message: "Access denied",
			});
		}

		const token = authorization.split(" ")[1];

		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Access denied",
			});
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.tokenData = decoded;

		next();
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
