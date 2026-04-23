import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProfileImage: QuartzComponentConstructor = () => {
  const ProfileImageComponent: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    return (
      <div class="profile-image-container">
        <img src="/Files/Images/zeev.jpg" alt="Profile photo" />
      </div>
    )
  }

  ProfileImageComponent.css = `
  .profile-image-container {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }

  .profile-image-container img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  `

  return ProfileImageComponent
}

export default ProfileImage