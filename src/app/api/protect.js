import { authenticateUser } from '../../middleware/auth';

export default (req, res) => {
  if (req.method === 'GET') {
    // This route is protected by authentication
    res.status(200).json({ message: 'You are authenticated!', user: req.user });
  } else {
    res.status(405).end();
  }
};

// In your route file where you define protected routes
import { authenticateUser } from '../../middleware/auth';

router.get('/protected', authenticateUser, (req, res) => {
  // Handle the protected route logic here
});

