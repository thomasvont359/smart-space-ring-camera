const features = [
  {
    title: "Ring App",
    description: "Control all your Ring devices from one easy-to-use app. Get real-time notifications, view live video, and talk to visitors from anywhere.",
    image: "https://eu.ring.com/cdn/shop/files/01_Benefits_ringapp_desktop_2100x1200_474cdd9d-881b-41a0-81a6-730d93de171d_1600x.jpg?v=1621947405",
  },
  {
    title: "Linked Devices",
    description: "Connect all your Ring devices together. When one detects motion, they all start recording for complete coverage of your property.",
    image: "https://eu.ring.com/cdn/shop/files/02_Benefits_Linked_devices_desktop_2100x1200_73bef896-1507-4445-9446-bcf9b04c693d_1600x.jpg?v=1621947563",
  },
  {
    title: "Privacy Zones",
    description: "Set up customisable privacy zones so your cameras only monitor the areas you choose. You're always in control of your privacy.",
    image: "https://eu.ring.com/cdn/shop/files/04_Benefits_privacy_zones_desktop_2100x1200_1050b800-95ec-4f0e-bc3e-9eb70da01347_1600x.jpg?v=1621947677",
  },
];

export default function RingAppFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
            Smart Living
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Everything connects with Ring
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Manage your entire home security system from the palm of your hand
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
