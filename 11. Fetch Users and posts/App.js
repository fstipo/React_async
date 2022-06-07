import React, { Suspense } from 'react';
import ProfileDetails from './components/ProfileDetails';
import ProfilePosts from './components/ProfilePosts';

function App() {
  return (
    <div className="container my-5 text-dark">
      <Suspense fallback={<h1>Loading user...</h1>}>
        <ProfileDetails />
      </Suspense>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfilePosts />
      </Suspense>
    </div>
  );
}

export default App;
