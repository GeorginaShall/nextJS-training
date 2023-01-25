import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { students: data }
    }
  }
  
  const students = ({ students }) => {
    console.log(students)
  
    return (
      <div>
        <h1>All students</h1>
        {students.map(student => (
            <Link href={'/students/' + student.id} key={student.id} className="py-5 px-4 block bg-white my-5 mx-2.5 border-l-8 border-white hover:border-blue">
              <h3>{ student.name }</h3>
            
          </Link>
        ))}
      </div>
    );
  }
   
export default students;