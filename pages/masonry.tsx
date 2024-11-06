import Image from "next/image";
import React from "react";

// with only one line of code columns: "350px"  will take care of everything :)
const imageSrcs = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDF8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1668485968642-30e3d15e9b9c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1473286835901-04adb1afab03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1542596767-e9c33dc85019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1542596767-e9c33dc85019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1708110921152-850148b86156?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHwxfDB8fHww",
];

export default function Masonry() {
  return (
    <div style={{ columns: "350px" }} className="">
      {imageSrcs.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className=" mb-4 "
          layout="responsive"
          width={0}
          height={0}
        />
      ))}
    </div>
  );
}
