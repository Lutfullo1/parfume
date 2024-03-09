import React from "react";
import { ArrowDown } from "../../../../assets/icons/arrow-down";
import { Search } from "../../../../assets/icons/search";
import { Heart } from "../../../../assets/icons/heart";
import { Profile } from "../../../../assets/icons/profile";

import { useToggle } from "../../../../hook/useToggle";
import { Modal } from "../../../../components/ui/modal";

import { Button } from "../../../../components/ui/button";

export const Auth = () => {
  const { close, isOpen, open } = useToggle();
  return (
    <div className="flex items-center gap-[30px]">
      <div className="flex items-center gap-[8px]">
        <p>En</p>
        <ArrowDown />
      </div>
      <Search />
      <Heart />
      <Modal isOpen={isOpen} close={close}>
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-center text-[28px]">Create an account</p>
          <input
            className="px-[10px] py-[8px] border border-grey rounded outline-none"
            type="text"
            placeholder="Username"
          />
          <input
            className="px-[10px] py-[8px] border border-grey outline-none"
            type="email"
            placeholder="Email*"
          />
          <input
            className="px-[10px] py-[8px] border border-grey outline-none"
            type="text"
            placeholder="Phone number"
          />
          <input
            className="px-[10px] py-[8px] border border-grey outline-none"
            type="password"
            placeholder="Password"
          />
          <input
            className="px-[10px] py-[8px] border border-grey outline-none"
            type="password"
            placeholder="Repeat Password"
          />
          <Button className="mx-auto" variant="black">
            Sign up
          </Button>
          <p className="text-center">Already have an account?</p>
          <Button variant="transparent">Login</Button>
        </div>
      </Modal>
      <Profile onClick={open} />
      <p>Bag 0</p>
    </div>
  );
};
