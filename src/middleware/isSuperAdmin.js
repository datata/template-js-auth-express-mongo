export const isSuperAdmin = (req, res, next) => {
	try {
		const { roleName } = req.tokenData;

		if (roleName !== "super_admin") {
			return res.status(403).json({
				success: false,
				message: "Access denied",
			});
		}

		next();
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
