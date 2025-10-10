// "use client";
// import ProfileEditButton from "@/auth/nextjs/components/ProfileEditButton";
// import ToggleRole from "@/auth/nextjs/components/ToggleRole";
// import React, { useState } from "react";
// import { SiValorant } from "react-icons/si";
// import Modal from "./Modal";
// import { ProfileForms } from "../../../../components/forms/ProfileForms";

// interface ProfileClientProps {
//   fullUser: any;
// }

// const ProfileClient = ({ fullUser }: ProfileClientProps) => {
//   const [isEditActive, setEditActive] = useState<boolean>(false);
//   return (
//     <div className="relative">
//       <ProfileEditButton
//         onClick={() => {
//           setEditActive(!isEditActive);
//         }}
//       />
//       <h2 className="font-semibold text-2xl heading-line mb-2.5">
//         Account Information
//       </h2>

//       <div className="flex gap-3 items-center mb-4">
//         <SiValorant
//           size={75}
//           className="bg-gray-700 p-1 rounded-full text-white"
//         />
//         <div>
//           <h1 className="text-xl font-semibold capitalize">
//             {" "}
//             {fullUser?.name}
//           </h1>
//           <h1 className="text-lg"> {fullUser?.email}</h1>
//         </div>
//       </div>

//       <h1 className="text-2xl">User ID: {fullUser?.id}</h1>
//       <h1 className="text-2xl">Role: {fullUser?.role}</h1>
//       <div className="flex mt-3">
//         <ToggleRole />
//       </div>
//       {isEditActive && (
//         <Modal isActive={isEditActive}>
//           <ProfileForms />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default ProfileClient;
