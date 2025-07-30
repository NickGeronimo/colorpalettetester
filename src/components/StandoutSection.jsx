export default function StandoutSection({  bgColorKey, bgColor, textColorKey, textColor }) {
    return (
        <section
            className="p-12 min-h-50 flex items-center justify-center "
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >

            <div className="text-center" >
                <h2 className="text-3xl font-bold mb-4 capitalize" style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}><strong>{bgColorKey} Color on {textColorKey} Color</strong></h2>
                <p style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}>
          This section is using  <strong>{bgColor}</strong> as your background color and <strong>{textColor}</strong> as your text color.
                </p>
            </div>

        </section>
    );
}
