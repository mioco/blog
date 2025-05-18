import { FaGithub } from 'react-icons/fa';

export const Profile = () => {
    return (
        <section className="mb-12 flex flex-col items-center">
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Osyo</h1>
          <p className="text-gray-600 mb-4">Engineering at Bytedance</p>
          <a 
            href="https://github.com/mioco" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </section>
    )
}
