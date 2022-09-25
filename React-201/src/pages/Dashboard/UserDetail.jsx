import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(location.state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      <h2>Kullanıcı Detayları</h2>
      {loading ? 'Loading...' : ''}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) - 1}`}>
        <button disabled={Number(id) === 1}>Önceki</button>
      </Link>

      <Link to={`/users/${Number(id) + 1}`}>
        <button disabled={Number(id) === 10}>Sonraki</button>
      </Link>
    </>
  );
};

export default UserDetail;
