import { faker } from "@faker-js/faker";


function createRandomPost(range) {
   const posts=  Array.from({ length: range }, () =>{ return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    }});
    
    return posts
  }

  export {createRandomPost}