import '../styles/animations.css'
import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{'--animation-speed': animationSpeed}}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className={`dance-button ${isAnimating ? 'stop' : 'start'}`}
          aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작하기'}
        >
          {isAnimating ? '🛑 멈춤' : '💃 춤추기'}
        </button>

        <div className="speed-controls">
          <label htmlFor="speed-slider" className="speed-label">
            속도: {animationSpeed}x
          </label>
          <input
            id="speed-slider"
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={animationSpeed}
            onChange={(e) => changeSpeed(parseFloat(e.target.value))}
            className="speed-slider"
            aria-label="애니메이션 속도 조절"
          />
        </div>
      </div>

      <p className="instruction">
        {isAnimating ? '고양이가 신나게 춤추고 있어요! 🎵' : '버튼을 눌러서 고양이를 춤추게 해보세요! 🎶'}
        <br />
        <small>키보드 스페이스바로도 조작 가능해요! ⌨️</small>
      </p>
    </div>
  )
}

export default DancingCat