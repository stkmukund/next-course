interface Props{
    searchParams: {firstName: string, lastName: string, email: string, password: string,gender: string,age: number, bio: string,agree: boolean, fruit: string, color: string}
}

const FormDataPage = ({searchParams: {firstName, lastName, email, password, gender, age, bio, agree, fruit, color}} : Props) => {

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Form Data</h1>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Agree to Terms:</strong> {agree ? 'Yes' : 'No'}</p>
      <p><strong>Favorite Fruit:</strong> {fruit}</p>
      <p><strong>Favorite Color:</strong> {color}</p>
    </div>
  );
};

export default FormDataPage;
