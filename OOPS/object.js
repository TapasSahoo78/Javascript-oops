
const data = {
    id: 1,
    name: 'Tapas',
    age: 25,
    email: 'tapas@admin.com'
};

try {
    console.log(data);
    console.log(`Your id: ${data.id}.Your name is: ${data.name}.Your age ${data.age} and Your email is ${data.email}`);
} catch (error) {
    console.log(error);
} finally {
    console.log('Successfully');
}