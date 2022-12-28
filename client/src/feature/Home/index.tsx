import { FC } from 'react';
import Header from '../../shared/Header/Header';
import NavBar from './NavBar';
import '../../assets/css/Home.scss';
import AddPost from './AddPost';
import PostsList from './PostsList';

interface HomeProps { 
  session ?: boolean
}

const Home: FC<HomeProps> = ({ session }) => {
  return (
    <div className="home">
      <Header></Header>
      <main className="contentContainer">
        <section className='leftPane'>
          <NavBar></NavBar>
        </section>
        
        <section className='middlePane'>
          <AddPost></AddPost>
          <PostsList></PostsList>
        </section>

        <section className='rightPane'>
         
        </section>
        
      </main>
    </div>
  );
}

export default Home;
