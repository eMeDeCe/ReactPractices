import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("Lemoncode");
 /* React.useEffect(() => {
    const ok = fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filter]);*/

  /*React.useEffect(() => {
    try {
       fetch(`https://api.github.com/orgs/${filter}/members`)
      .then(function(response) {
        if (response.ok) {
          response.json().then((json) => setMembers(json));
        } else {
          console.log("error");
        }

      });
    } catch (error) {
      console.log("continua");
    }
   
      //.then((json) => setMembers(json));
  }, [filter]);*/
  fetch(`https://api.github.com/orgs/${filter}/members`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error in filter');
    }
  })
  .then((responseJson) => {
      setMembers(responseJson);
  })
  .catch((error) => {
    console.log(error)
  });
  
  return (
    <>
      <form >
        <div>
            <label>Organización</label>
            <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          </div>
      </form>
      <h2>Los miembros de la organización {filter} el github</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr key={i}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
