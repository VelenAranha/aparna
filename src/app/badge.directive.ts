import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core'
import { uniqueId } from 'lodash'

@Directive({
  selector: '[appBadge]',
})
export class BadgeDirective implements OnInit, OnDestroy {
  badgeElement: HTMLSpanElement | undefined

  @Input('appBadge')
  get content(): string | number {
    return this._content
  }
  set content(newContent: string | number) {
    this.updateContent(newContent)
  }
  private _content: string | number = ''

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'position',
      'relative'
    )
    this.createBadgeElement()
    this.appendBadgeToView()
  }

  ngOnDestroy() {
    // Angular ViewEngine remembers element index created through the Renderer.
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this.badgeElement)
    }
  }

  createBadgeElement() {
    const badgeEl: HTMLSpanElement = this._renderer.createElement('span')
    badgeEl.classList.add('app-badge-content')
    badgeEl.setAttribute('id', uniqueId(`app-badge-content-`))
    badgeEl.innerText = `${this._content}`

    this.badgeElement = badgeEl
  }

  appendBadgeToView() {
    if (this.badgeElement) {
      this._renderer.appendChild(
        this._elementRef.nativeElement,
        this.badgeElement
      )
    }
  }

  updateContent(newContent: string | number) {
    this._content = newContent
    if (this.badgeElement) {
      this.badgeElement.innerText = `${newContent}`
    }
  }
}
