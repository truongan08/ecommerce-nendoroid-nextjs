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
import { FaDongSign } from "react-icons/fa6";
import supabase from "@/utils/SupabaseAdmin";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const category_id: string = formEntries.category_id as string;
    const name: string = formEntries.name as string;
    const description: string = formEntries.description as string;
    const file: any = formEntries.file as any;
    const status: string = formEntries.status as string;
    const price: string = formEntries.price as string;
    const stock: string = formEntries.stock as string;

    const { data: path, error: ErrorUploadImage } = await supabase.storage
      .from("products")
      .upload(`${name}.png`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (!path) {
      throw Error("Can not upload image");
    }
    const { data } = supabase.storage.from("products").getPublicUrl(path.path);
    const image_url = [data.publicUrl];
    const priceS = Number(price);
    const stockS = Number(stock);
    const { error } = await supabase.from("product").insert({
      category_id,
      name,
      description,
      image_url,
      status,
      price: priceS,
      stock: stockS,
    });
    if (!error) {
      onClose();
      setLoading(false);
      alert("Add product success");
      router.refresh();
    }
  };

  const category = [
    { category_id: "1", name: "Anime & Manga", description: "" },
    { category_id: "2", name: "Mascot", description: "" },
    { category_id: "3", name: "Vocaloid", description: "" },
    { category_id: "4", name: "Disney", description: "" },
    { category_id: "5", name: "Movies & TV", description: "" },
    { category_id: "6", name: "Video Games", description: "" },
  ];
  const status = [
    { status: "Nope", value: "" },
    { status: "Trending", value: "trending" },
    { status: "Best Seller", value: "best-seller" },
  ];

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
                  Add product
                </ModalHeader>
                <ModalBody>
                  <Select
                    label="Select an category"
                    name="category_id"
                    items={category}
                  >
                    {(category) => (
                      <SelectItem
                        key={category.category_id}
                        value={category.category_id}
                      >
                        {category.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    isRequired
                    placeholder="Enter name product"
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
                    id="description"
                    name="description"
                    label="Description"
                    isRequired
                    placeholder="Enter description product"
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
                  <Input
                    endContent={
                      <FaDongSign className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Price"
                    name="price"
                    isRequired
                    placeholder="Enter price product"
                    type="number"
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
                  <Select label="Select an status" name="status" items={status}>
                    {(status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.status}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    label="Stock"
                    id="stock"
                    name="stock"
                    isRequired
                    placeholder="Enter stock product"
                    type="number"
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
                  <Button type="submit" color="primary" isLoading={loading}>
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
export default AddProduct;
