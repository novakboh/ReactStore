import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <section className="selected-filters">
        <h3>Ви обрали:</h3>

        <div className="selected-tag">
          <span className="check-mark">✓</span>
          <span>Бренд: <strong>Apple</strong></span>
          <span className="remove-mark">×</span>
        </div>

        <div className="selected-tag">
          <span className="check-mark">✓</span>
          <span>Серія: <strong>iPhone 17 Pro</strong></span>
          <span className="remove-mark">×</span>
        </div>

        <p className="selected-count">Підібрано 9 товарів з 1655</p>
        <span className="clear-filters">Очистити всі</span>
      </section>

      <section className="filters-panel">
        <h2>Фільтр</h2>

        <div className="filter-section">
          <div className="filter-heading">
            <span>Ціна</span>
            <span className="arrow-up" />
          </div>

          <div className="price-inputs">
            <div className="price-input">60999</div>
            <span className="price-dash">-</span>
            <div className="price-input">83999</div>
            <div className="price-ok">Ok</div>
          </div>

          <div className="price-slider">
            <div className="slider-line" />
            <div className="slider-point point-left" />
            <div className="slider-point point-right" />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-heading">
            <span>Бренд</span>
            <span className="arrow-up" />
          </div>

          <div className="filter-options">
            <div className="filter-option">
              <span className="fake-checkbox checked">✓</span>
              <span>Apple <span className="option-count">(9)</span></span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>Samsung (+0)</span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>realme (+0)</span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>Xiaomi (+0)</span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>Motorola (+0)</span>
            </div>
          </div>

          <div className="show-all">
            <span>Показати всі</span>
            <span className="arrow-down" />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-heading">
            <span>Стан</span>
            <span className="arrow-up" />
          </div>

          <div className="filter-options">
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>Новий <span className="option-count">(9)</span></span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>Уцінка (0)</span>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-heading">
            <span>Серія</span>
            <span className="arrow-up" />
          </div>

          <div className="filter-options">
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>iPhone Duo <span className="option-count">(+8)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>iPhone 18 Pro Max <span className="option-count">(+16)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>iPhone 18 Pro <span className="option-count">(+16)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>iPhone 17 Pro Max <span className="option-count">(+12)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox checked">✓</span>
              <span>iPhone 17 Pro <span className="option-count">(9)</span></span>
            </div>
          </div>

          <div className="show-all">
            <span>Показати всі</span>
            <span className="arrow-down" />
          </div>
        </div>

        <div className="filter-section memory-section">
          <div className="filter-heading">
            <span>Внутрішня пам'ять</span>
            <span className="arrow-up" />
          </div>

          <div className="filter-options">
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>256 Гб <span className="option-count">(3)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>512 Гб <span className="option-count">(3)</span></span>
            </div>
            <div className="filter-option">
              <span className="fake-checkbox" />
              <span>1 Тб <span className="option-count">(3)</span></span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>64 Гб (0)</span>
            </div>
            <div className="filter-option disabled">
              <span className="fake-checkbox" />
              <span>128 Гб (0)</span>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar