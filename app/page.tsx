import Profile from '@/data/ProfileData';
import SocialComp from '@/components/HomeComponents/SocialComp'
import TagComp from '@/components/HomeComponents/TagComp'

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8">
      <div className="flex flex-col sm:flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Profile Image */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex justify-center">
          <img
            src={Profile.avatar.srcPath}
            alt={Profile.avatar.caption}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border border-black object-cover shadow-lg"
          />
        </div>

        {/* Profile Info */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{Profile.firstName} {Profile.lastName}</h1>
          
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <span className='mr-2'>{Profile.position.icon}</span>
            <h2 className="text-lg sm:text-xl text-gray-600">{Profile.position.text}</h2>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="mr-2">{Profile.location.icon}</span>
            <h3 className="text-lg sm:text-xl font-light">{Profile.location.text}</h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
            {Profile.tags.map((tag) => (
              <TagComp {...tag} key={tag.id} />
            ))}
          </div>

          {/* Social Links (Top) */}
          <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
            {Profile.socialLink.map((social) => (
              <SocialComp key={social.id} {...social} />
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center lg:text-left">
        <p className="text-base sm:text-lg leading-relaxed">{Profile.summary}</p>
      </div>

      {/* Social Links (Bottom) - Only visible on mobile and tablet */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 sm:hidden lg:hidden">
        {Profile.socialLink.map((social) => (
          <SocialComp key={social.id} {...social} />
        ))}
      </div>
    </div>
  );
}
