export const avatarURL = (
  avatar: null | {
    data: string | null;
    date: Date | null;
    blob: Blob | null | File;
  }
) => {
  if (avatar && avatar.blob) {
    return URL.createObjectURL(avatar.blob);
  } else if (avatar && avatar.data)
    return "data:image/jpeg;base64," + avatar.data;
  else return undefined;
};
