export const isSuperAdmin = (req, res, next) => {
	try {
		const { roleNAme } = req.tokenData;

		if (roleNAme !== "super_admin") {
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
