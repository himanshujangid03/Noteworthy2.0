import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getAvatarImage(email) {
  const { data, error } = await supabase
    .from("Avatars")
    .select("imageUrl")
    .eq("email", email);

  if (error) throw new Error(error);

  return data;
}

export async function updateAvatarImage(data) {
  //* get email
  const { email } = data;

  //* Get old image
  const { data: oldImage } = await supabase.storage.from("avatars").list();
  const fileName = oldImage[0].name;

  //* Generate image name
  const imageName = `${Math.random()}-${data?.image?.name}`.replaceAll("/", "");

  //* Generate image path
  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  //* Update new image url
  const { data: response, error } = await supabase
    .from("Avatars")
    .update({ imageUrl: imagePath })
    .eq("email", email)
    .select();

  //* Delete old image
  const { error: deletedError } = await supabase.storage
    .from("avatars")
    .remove(fileName);

  //* Upload new image
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, data.image);

  if (error || storageError || deletedError) return new Error("error");

  return response;
}

export async function createAvatarImage(newUser) {
  const { email } = newUser;
  //* Generate image name
  const imageName = `${Math.random()}-${newUser?.image?.name}`.replaceAll(
    "/",
    ""
  );

  //* Generate image path
  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  //* Insert new user with email and uploaded image
  const { data, error } = await supabase
    .from("Avatars")
    .insert([{ imageUrl: imagePath, email: email }]);

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, newUser.image);

  if (error || storageError) return new Error(error);

  return data;
}
