export const getImageUrl = (url: string) => {
  console.log(url)
  return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
}
