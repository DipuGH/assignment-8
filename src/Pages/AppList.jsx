import React from "react";

const AppList = ({ apps }) => {
    console.log (apps)
  return (
    <div>
      {apps.map((app) => (
        <div key={app.id}>
          <h3>{app.title}</h3>
          <p>{app.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AppList;
