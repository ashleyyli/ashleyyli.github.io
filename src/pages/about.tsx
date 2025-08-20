import Typewriter from 'typewriter-effect';

export function About() {
  return (
    <div>
      <h1 className="text-5xl font-bold mt-10 pb-6">Hi, I'm Ashley!</h1>
      <h4 className="text-3xl text-gray-500 pb-4">
        <Typewriter options={{
          strings: ['not sure what to put here', 'Hello, world!', 'updog'],
          autoStart: true,
          loop: true
        }} />
      </h4>
      <div className="pb-4">
        <p className="pb-8 text-lg">
          I like tackling challenges and I'm always excited to learn something new.  Along the way, I try to learn deeply and keep my work clean and thoughtful.
        </p>
        <p className="pb-4 text-lg"> Some fast facts: </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Undergraduate student in Computer Science and Linguistics at the University of Illinois Urbana Champaign</li>
          <li>Research assistant with Professor Lawrence Angrave, working on methods to segment engineering lecture videos to improve educational accessibility</li>
          {/* <li>i would really love an internship (just saying)</li> */}
          <li>Open to new project ideas!!!!!!!!!!!!!!!!!!!!</li>
        </ul>
      </div>
  </div>
  );
};