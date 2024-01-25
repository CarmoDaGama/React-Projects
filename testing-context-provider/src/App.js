import logo from './logo.svg';
import './App.css';
import Section from './Section';
import Heading from './Heading';

export default function App() {
  function successCallback(result) {
    console.log("It succeeded with " + result);
  }

  function failureCallback(error) {
    console.log("It failed with " + error);
  }
  async function doSomething(){
   

    return vet[4];
  }
  const promise = doSomething();
  promise.then(successCallback, failureCallback); 
  return (
    <Section>
      <heading>My Profile</heading>
      <Post 
        title = "Hello traveller!"
        body="Read about mv adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts(){
  return(
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts(){
  return(
    <Section>
      <Heading>Recent Posts</Heading>
      <Post 
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post 
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({title, body}){
  return(
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}