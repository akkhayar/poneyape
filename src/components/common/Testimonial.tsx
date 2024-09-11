import { StaticImageData } from "next/image";

type TestimonialProps = {
  id: number;
  rating: number;
  text: string;
  profile: string,
  author: string;
  position: string;
};

// const Testimonial = ({ rating, text, author, position }: TestimonialProps) => {
//   return (
//     <div className="flex flex-col items-center gap-10">
//       <div>stars {rating}</div>
//       <p className="text-center">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//         varius enim in eros elementum tristique. Duis cursus, mi quis viverra
//         ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
//       </p>
//       <div className="flex gap-5">
//         <div>profile</div>
//         <div>
//           <p className="semibold">{author}</p>
//           <p>{position}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Testimonial = () => {
  const Testimonials: TestimonialProps[] = [
    {
      id: 1,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate magnam dignissimos est praesentium enim! Repellat, voluptate, laboriosam obcaecati dolorem blanditiis cupiditate inventore eaque assumenda natus temporibus enim. Architecto, quia sapiente.',
      profile: '/profile.png',
      author: 'Thazin Win',
      position: 'UI/UX Designer',
    }
  ]
  return (
    <></>
  )
}

export default Testimonial;
