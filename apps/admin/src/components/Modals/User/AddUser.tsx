"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
  Select,
  SelectItem,
} from "ui/components";
import supabase from "@/utils/SupabaseAdmin";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const full_name: string = formEntries.name as string;
    const email: string = formEntries.email as string;
    const password: string = formEntries.password as string;
    const file: any = formEntries.file as any;

    const { data: path, error: ErrorUploadImage } = await supabase.storage
      .from("avatars")
      .upload(`${email}.png`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (!path) {
      throw Error("Can not upload image");
    }
    const { data, error: ErrorGetImage } = await supabase.storage
      .from("avatars")
      .createSignedUrl(path.path, 60 * 60 * 24 * 365);
    if (!data) {
      throw Error("Can not get url image");
    }
    const avatar_url = data.signedUrl;
    const {
      data: { user },
      error,
    } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      user_metadata: { full_name: full_name, avatar_url: avatar_url },
      email_confirm: true,
    });
    if (!error) {
      setSuccess(true);
      alert("Add user success");
      router.refresh();
    }
  };

  return (
    <>
      <Button color="primary" variant="solid" onPress={onOpen}>
        Add
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <>
          <ModalContent>
            {(onClose) => (
              <form onSubmit={(e) => handleSubmit(e)}>
                <ModalHeader className="flex flex-col gap-1">
                  Add user
                </ModalHeader>
                <ModalBody>
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    isRequired
                    placeholder="Enter full name"
                    variant="bordered"
                    classNames={{
                      input: [
                        "border-none",
                        "shadow-none",
                        "ring-offset-0",
                        "ring-0",
                        "focus:shadow-none",
                        "focus:ring-offset-0",
                        "focus:ring-0",
                        "bg-transparent",
                        "text-black/90",
                        "placeholder:text-default-700/500",
                      ],
                    }}
                  />
                  <Input
                    id="email"
                    name="email"
                    label="Email"
                    isRequired
                    placeholder="Enter email"
                    variant="bordered"
                    classNames={{
                      input: [
                        "border-none",
                        "shadow-none",
                        "ring-offset-0",
                        "ring-0",
                        "focus:shadow-none",
                        "focus:ring-offset-0",
                        "focus:ring-0",
                        "bg-transparent",
                        "text-black/90",
                        "placeholder:text-default-700/500",
                      ],
                    }}
                  />
                  <Input
                    label="Password"
                    id="password"
                    name="password"
                    isRequired
                    placeholder="Enter password"
                    type="password"
                    variant="bordered"
                    classNames={{
                      input: [
                        "border-none",
                        "shadow-none",
                        "ring-offset-0",
                        "ring-0",
                        "focus:shadow-none",
                        "focus:ring-offset-0",
                        "focus:ring-0",
                        "bg-transparent",
                        "text-black/90",
                        "placeholder:text-default-700/500",
                      ],
                    }}
                  />
                  <Input type="file" isRequired multiple name="file"></Input>
                  {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    onWaiting={success ? onClose : onOpen}
                  >
                    Confirm
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </>
      </Modal>
    </>
  );
};
export default AddUser;
