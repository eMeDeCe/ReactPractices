import React from "react";
import { Link, generatePath } from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';


interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("Lemoncode");
  const [company, setCompany]= React.useState("Lemoncode");
 
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

  const [page, setPage] = React.useState(1);
  const rows_per_page = 5;
  const handleChange = (event: React.ChangeEvent<{ value: string }>, value: number) => {
    setPage(value);
    showList();
  };

  function showList () {
    let start = rows_per_page * (page-1);
    let end = rows_per_page * page;
    let memberPerPage = members.slice(start, end);
    return memberPerPage;
  }

  const handleBuscar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(company);
  };

  
  return (
    <>
     <form onSubmit={handleBuscar}>
      <h2>Hello from login page</h2>
      <div>
        <div>
          <input
            defaultValue='Lemoncode'
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Buscar</button>
    </form>
      <h2>Los miembros de la organización {filter} en github</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {showList().map((member, i) => (
            <tr key={i}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login }) } >
                  {member.login}
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={Math.ceil(members.length/rows_per_page)} onChange={handleChange} />
    </>
  );
};

