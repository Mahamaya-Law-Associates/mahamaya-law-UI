import React from 'react';

const UserAgreementModal = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-300 p-6 rounded shadow-lg max-w-lg mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Note</h2>
        <p className="mb-6">
        The Bar Council of India prohibits advocates from advertising or soliciting work. By accessing this website (https://mahamayalaw.in/), you confirm that you are seeking information about Mahamaya Law and its legal services independently, without any solicitation, advertisement, or inducement by the or its members. This website’s content is intended solely for informational purposes and should not be interpreted as any form of solicitation or advertisement. The information presented here is not legal advice, and Mahamaya Law bears no responsibility for actions taken based on the content provided on this website. Please consult a qualified legal professional for specific legal guidance.
        </p>
        <button
          onClick={onAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default UserAgreementModal;
