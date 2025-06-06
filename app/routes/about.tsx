import Typewriter from 'typewriter-effect';

export function About() {
  return (
    <div>
      <h1 className="text-5xl font-bold mt-10 pb-6">Hi, I'm Ashley!</h1>
      <h4 className="text-3xl text-gray-500 pb-4">
        <Typewriter options={{
          strings: ['test1', 'yup', 'Hello, world!', 'another greeting would be too much', 'updog'],
          autoStart: true,
          loop: true
        }} />
      </h4>
      <div className="pb-4">
        <p className="pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="pb-4"> Some fast facts: </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Undergraduate Computer Science and Linguistics student at the University of Illinois Urbana Champaign</li>
          <li>Research assistant under Professor Lawrence Angrave, working on a method to segment engineering lecture videos in order to increase accessibility in education</li>
          <li>i would really love an internship (just saying)</li>
        </ul>
      </div>
  </div>
  );
};