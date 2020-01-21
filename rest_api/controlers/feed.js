const { validationResult } = require('express-validator/check');

exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [
			{
				_id: '1',
				title: 'First Post', 
				content: 'This is first post!', 
				imageURL: 'images/pp.jpg',
				creator: {
					name: "Cuzin",
				},
				createdAt: new Date()
			}
		]
	});
};

exports.createPost = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			message: 'Validation failed',
			errors: errors.array()
		})
	}
	const title = req.body.title;
	const content = req.body.content;
	console.log(title, content)
	res.status(201).json({
		message: 'Post created!',
		post: { 
			_id: new Date().toISOString(), 
			title: title, 
			content: content,
			creator: {name: 'Cuzin'},
			createdAt: new Date() 
		}
	})
};
