export default function AddToCartBttn({text, style='styleMain'}) {
    return (
        <button
        className={`font-mont text-lg w-40 border-2 border-slate-400 py-2 px-4 mt-2 rounded-full transition-all duration-75 ${
            style === 'styleMain'
              ? 'text-slate-950 hover:bg-slate-200'
              : style === 'styleSecondary'
              ? 'text-slate-50 hover:bg-slate-600'
              : ''
          }`}
        >
            {text}
        </button>
    )
}