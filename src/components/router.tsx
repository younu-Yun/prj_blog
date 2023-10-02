import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/posts/detail';
import PostList from '../pages/posts';
import PostNew from '../pages/posts/new';
import PostEdit from '../pages/posts/edit';
import ProfilePage from '../pages/profile';

import LoginPage from '../pages/login';
import SignUpPage from '../pages/signup';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
