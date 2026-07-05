import {
  Mention
} from "./chunk-ZM7CZQTI.js";
import {
  Toolbar
} from "./chunk-WATKYEAF.js";
import "./chunk-5WDVVTKR.js";
import {
  ButtonSettings,
  DropDownButton,
  SpeechToText,
  TooltipSettings,
  Uploader
} from "./chunk-BVU7BQFE.js";
import {
  Popup,
  createSpinner,
  hideSpinner,
  showSpinner
} from "./chunk-UDJEW7V3.js";
import {
  ArrayBase,
  ComplexBase,
  ComponentBase,
  ComponentMixins,
  Template,
  setValue
} from "./chunk-HEY2Z56I.js";
import {
  Fab
} from "./chunk-HOBHK6TE.js";
import {
  ChildProperty,
  Collection,
  Complex,
  Component as Component2,
  Event,
  EventHandler,
  Internationalization,
  L10n,
  NotifyPropertyChanges,
  Property,
  SanitizeHtmlHelper,
  addClass,
  append,
  attributes,
  compile,
  formatUnit,
  getUniqueID,
  isNullOrUndefined,
  remove,
  removeClass,
  select
} from "./chunk-BT7RVJDN.js";
import {
  CommonModule
} from "./chunk-QDLX74IB.js";
import "./chunk-PVK2TJ6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  NgModule,
  Renderer2,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-46EDR2RG.js";
import {
  __decorate
} from "./chunk-YB2C65QT.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@syncfusion/ej2-interactive-chat/src/interactive-chat-base/interactive-chat-base.js
var __extends = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ToolbarItem = (
  /** @class */
  (function(_super) {
    __extends(ToolbarItem2, _super);
    function ToolbarItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate2([
      Property("")
    ], ToolbarItem2.prototype, "iconCss", void 0);
    __decorate2([
      Property()
    ], ToolbarItem2.prototype, "text", void 0);
    __decorate2([
      Property("Button")
    ], ToolbarItem2.prototype, "type", void 0);
    __decorate2([
      Property("Left")
    ], ToolbarItem2.prototype, "align", void 0);
    __decorate2([
      Property(true)
    ], ToolbarItem2.prototype, "visible", void 0);
    __decorate2([
      Property(false)
    ], ToolbarItem2.prototype, "disabled", void 0);
    __decorate2([
      Property("")
    ], ToolbarItem2.prototype, "tooltip", void 0);
    __decorate2([
      Property("")
    ], ToolbarItem2.prototype, "cssClass", void 0);
    __decorate2([
      Property(null)
    ], ToolbarItem2.prototype, "template", void 0);
    __decorate2([
      Property(-1)
    ], ToolbarItem2.prototype, "tabIndex", void 0);
    return ToolbarItem2;
  })(ChildProperty)
);
var ToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends(ToolbarSettings2, _super);
    function ToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate2([
      Collection([], ToolbarItem)
    ], ToolbarSettings2.prototype, "items", void 0);
    __decorate2([
      Event()
    ], ToolbarSettings2.prototype, "itemClicked", void 0);
    return ToolbarSettings2;
  })(ChildProperty)
);
var InterActiveChatBase = (
  /** @class */
  (function(_super) {
    __extends(InterActiveChatBase2, _super);
    function InterActiveChatBase2(options, element) {
      var _this = _super.call(this, options, element) || this;
      _this.undoStack = [];
      _this.redoStack = [];
      _this.undoDelayTimer = null;
      return _this;
    }
    InterActiveChatBase2.prototype.preRender = function() {
    };
    InterActiveChatBase2.prototype.getModuleName = function() {
      return "interactivechatBase";
    };
    InterActiveChatBase2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    InterActiveChatBase2.prototype.render = function() {
    };
    InterActiveChatBase2.prototype.setDimension = function(element, width, height) {
      element.style.width = !isNullOrUndefined(width) ? formatUnit(width) : element.style.width;
      element.style.height = !isNullOrUndefined(height) ? formatUnit(height) : element.style.height;
    };
    InterActiveChatBase2.prototype.addCssClass = function(element, cssClass) {
      if (cssClass) {
        element.classList.add(cssClass);
      }
    };
    InterActiveChatBase2.prototype.addRtlClass = function(element, isRtl) {
      if (isRtl) {
        element.classList.add("e-rtl");
      }
    };
    InterActiveChatBase2.prototype.updateCssClass = function(element, newClass, oldClass) {
      if (oldClass) {
        removeClass([element], oldClass.trim().split(" "));
      }
      if (newClass) {
        addClass([element], newClass.trim().split(" "));
      }
    };
    InterActiveChatBase2.prototype.updateHeader = function(showHeader, headerElement, viewWrapper) {
      if (!showHeader) {
        headerElement.hidden = true;
        viewWrapper.style.height = "100%";
      } else {
        headerElement.hidden = false;
        viewWrapper.style.height = "";
      }
    };
    InterActiveChatBase2.prototype.renderViewSections = function(element, headerClassName, viewClassName) {
      var headerWrapper = this.createElement("div", { className: headerClassName });
      element.appendChild(headerWrapper);
      var viewWrapper = this.createElement("div", { className: viewClassName });
      element.appendChild(viewWrapper);
    };
    InterActiveChatBase2.prototype.createViewComponents = function(viewWrapper) {
      var contentWrapper = this.createElement("div", { className: "e-views" });
      var viewContainer = this.createElement("div", { className: "e-view-container" });
      contentWrapper.appendChild(viewContainer);
      viewWrapper.appendChild(contentWrapper);
    };
    InterActiveChatBase2.prototype.updateScroll = function(scrollElement) {
      scrollElement.scrollTo(0, scrollElement.scrollHeight);
    };
    InterActiveChatBase2.prototype.getElement = function(element) {
      var className;
      switch (element) {
        case "footer":
          className = "e-footer";
          break;
        case "contentContainer":
          className = "e-content-container";
          break;
        case "outputElement":
          className = "e-content";
          break;
        default:
          className = "";
          break;
      }
      return this.createElement("div", { className });
    };
    InterActiveChatBase2.prototype.getClipBoardContent = function(value) {
      var tempElement = document.createElement("div");
      tempElement.innerHTML = value;
      tempElement.style.top = "0";
      tempElement.style.left = "0";
      tempElement.style.position = "fixed";
      tempElement.style.opacity = "0";
      document.body.appendChild(tempElement);
      navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([tempElement.innerHTML], { type: "text/html" }),
          "text/plain": new Blob([tempElement.innerText], { type: "text/plain" })
        })
      ]);
      document.body.removeChild(tempElement);
    };
    InterActiveChatBase2.prototype.writeFileToClipboard = function(file) {
      var _a;
      if (!document.hasFocus() || !("clipboard" in navigator)) {
        return;
      }
      var mimeType = file.type;
      var supportedTypes = ["image/png"];
      if (supportedTypes.includes(mimeType)) {
        void navigator.clipboard.write([
          new ClipboardItem((_a = {}, _a[mimeType] = file, _a))
        ]);
        return;
      }
      var img = new Image();
      img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function(blob) {
          var _a2;
          if (blob) {
            void navigator.clipboard.write([
              new ClipboardItem((_a2 = {}, _a2[blob.type] = blob, _a2))
            ]);
          }
        }, "image/png");
      };
      img.src = URL.createObjectURL(file);
    };
    InterActiveChatBase2.prototype.getFooter = function() {
      this.footer = this.getElement("footer");
    };
    InterActiveChatBase2.prototype.createSuggestionElement = function(suggestionHeader) {
      var suggestionContainer = this.createElement("div", { className: "e-suggestions" });
      var suggestionHeaderElement = this.createElement("div", { className: "e-suggestion-header" });
      var suggestionListElement = this.createElement("div", { className: "e-suggestion-list" });
      if (suggestionHeader) {
        suggestionContainer.appendChild(suggestionHeaderElement);
      }
      suggestionContainer.appendChild(suggestionListElement);
      return { suggestionContainer, suggestionHeaderElement, suggestionListElement };
    };
    InterActiveChatBase2.prototype.renderSuggestions = function(suggestionsArray, suggestionHeader, suggestionTemplate, contextName, templateName, onSuggestionClick) {
      var isSuggestionTemplate = suggestionTemplate ? true : false;
      if (suggestionsArray && suggestionsArray.length > 0) {
        var _a = this.createSuggestionElement(suggestionHeader), suggestionContainer = _a.suggestionContainer, suggestionHeaderElement = _a.suggestionHeaderElement, suggestionListElement = _a.suggestionListElement;
        this.suggestionsElement = suggestionContainer;
        var suggestionContainerClass = "e-suggestions " + (isSuggestionTemplate ? "e-suggestion-item-template" : "");
        this.suggestionsElement.className = suggestionContainerClass;
        this.suggestionHeader = suggestionHeaderElement;
        var suggestionList = suggestionListElement;
        this.renderSuggestionList(suggestionsArray, suggestionList, isSuggestionTemplate, contextName, suggestionTemplate, templateName, onSuggestionClick);
        if (suggestionHeader) {
          this.suggestionHeader.innerHTML = suggestionHeader;
        }
        this.suggestionsElement.append(suggestionList);
        this.content.append(this.suggestionsElement);
      }
    };
    InterActiveChatBase2.prototype.renderSuggestionList = function(suggestionsArray, suggestionWrapper, isSuggestionTemplate, contextName, suggestionTemplate, templateName, onSuggestionClick) {
      var _this = this;
      var suggestionsListElement = this.createElement("ul", { attrs: { "tabindex": "-1" } });
      suggestionsArray.forEach(function(suggestion, i) {
        var _a;
        var suggestionList = _this.createElement("li");
        attributes(suggestionList, { "tabindex": "0" });
        EventHandler.add(suggestionList, "click", function(event2) {
          onSuggestionClick.call(_this, event2, suggestion);
        }, _this);
        EventHandler.add(suggestionList, "keydown", function(event2) {
          return _this.suggestionItemHandler(event2, suggestion);
        }, _this);
        if (isSuggestionTemplate) {
          var suggestionContext = (_a = { index: i }, _a[contextName] = suggestionsArray[parseInt(i.toString(), 10)], _a);
          _this.updateContent(suggestionTemplate, suggestionList, suggestionContext, templateName);
        } else {
          suggestionList.innerHTML = suggestion;
        }
        suggestionsListElement.append(suggestionList);
      });
      suggestionWrapper.appendChild(suggestionsListElement);
    };
    InterActiveChatBase2.prototype.suggestionItemHandler = function(event2, suggestionText) {
      if (event2.key === "Enter" && !event2.shiftKey) {
        this.onSuggestionClick(event2, suggestionText);
      }
    };
    InterActiveChatBase2.prototype.renderBannerView = function(bannerTemplate, parentElement, templateName) {
      if (bannerTemplate) {
        var className = templateName === "emptyChatTemplate" ? "e-empty-chat-template" : "e-banner-view";
        var introContainer = this.createElement("div", { className });
        this.updateContent(bannerTemplate, introContainer, {}, templateName);
        parentElement.prepend(introContainer);
      }
    };
    InterActiveChatBase2.prototype.updateContent = function(template, contentElement, context, templateName) {
      if (this.isReact) {
        this.clearTemplate([templateName]);
      }
      var notCompile = !(this.isReact || this.isVue);
      var ctn = this.getTemplateFunction(template, notCompile);
      if (typeof ctn === "string") {
        contentElement.innerHTML = ctn;
      } else {
        append(ctn(context, this), contentElement);
      }
      this.renderReactTemplates();
    };
    InterActiveChatBase2.prototype.renderFooterContent = function(footerTemplate, prompt, promptPlaceholder, showClearButton, className) {
      if (footerTemplate) {
        this.updateContent(footerTemplate, this.footer, {}, "footerTemplate");
      } else {
        this.renderFooter(className, prompt, promptPlaceholder, showClearButton);
      }
    };
    InterActiveChatBase2.prototype.renderFooter = function(className, prompt, promptPlaceholder, showClearButton) {
      if (showClearButton === void 0) {
        showClearButton = false;
      }
      this.editableTextarea = this.createElement("div", {
        attrs: {
          class: className,
          contenteditable: "true",
          placeholder: promptPlaceholder,
          role: "textbox",
          "aria-multiline": "true"
        },
        innerHTML: prompt
      });
      var hiddenTextarea = this.createElement("textarea", {
        attrs: {
          class: "e-hidden-textarea",
          name: "userPrompt",
          value: prompt
        }
      });
      var textAreaIconsWrapper = this.createElement("div", { className: "e-textarea-icons-wrapper" });
      this.appendChildren(textAreaIconsWrapper, this.editableTextarea, hiddenTextarea);
      this.footer.appendChild(textAreaIconsWrapper);
    };
    InterActiveChatBase2.prototype.updateTextAreaObject = function(textareaObj) {
      if (isNullOrUndefined(textareaObj)) {
        return;
      }
      var textarea = textareaObj.element;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };
    InterActiveChatBase2.prototype.renderSendIcon = function(sendIconClass) {
      var sendIcon = this.createElement("span", { attrs: { class: sendIconClass, role: "button", "aria-label": "Submit", tabindex: "0" } });
      this.footer.appendChild(sendIcon);
      return sendIcon;
    };
    InterActiveChatBase2.prototype.appendChildren = function(target) {
      var children = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
      }
      target.append.apply(target, children);
    };
    InterActiveChatBase2.prototype.insertBeforeChildren = function(target) {
      var children = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
      }
      target.prepend.apply(target, children);
    };
    InterActiveChatBase2.prototype.renderFooterIcons = function(sendIconClass, showClearButton, clearIconClass) {
      var footerIconsWrapper = this.createElement("div", { attrs: { class: "e-footer-icons-wrapper" } });
      this.sendIcon = this.createElement("span", { attrs: { class: sendIconClass, role: "button", "aria-label": "Submit", tabindex: "0" } });
      footerIconsWrapper.appendChild(this.sendIcon);
      if (showClearButton) {
        this.renderClearIcon(footerIconsWrapper, clearIconClass);
      }
      this.footer.firstChild.appendChild(footerIconsWrapper);
      this.footer.classList.add("e-footer-focus-wave-effect");
    };
    InterActiveChatBase2.prototype.renderClearIcon = function(footerIconsWrapper, clearIconClass) {
      this.clearIcon = this.createElement("span", { attrs: { class: clearIconClass, role: "button", "aria-label": "Close", tabindex: "-1" } });
      if (footerIconsWrapper) {
        footerIconsWrapper.prepend(this.clearIcon);
      }
    };
    InterActiveChatBase2.prototype.checkScrollAtBottom = function(Element, fabHeight) {
      var scrollThreshold = 5;
      var scrollTop = Math.floor(Element.scrollTop);
      var scrollHeight = Math.floor(Element.scrollHeight);
      var clientHeight = Math.floor(Element.clientHeight);
      return scrollHeight - scrollTop <= clientHeight + scrollThreshold + fabHeight;
    };
    InterActiveChatBase2.prototype.updateHiddenTextarea = function(prompt) {
      var hiddenTextarea = this.footer.querySelector(".e-hidden-textarea");
      hiddenTextarea.value = prompt;
    };
    InterActiveChatBase2.prototype.activateSendIcon = function(value) {
      this.sendIcon.classList.toggle("disabled", value === 0);
      this.sendIcon.classList.toggle("enabled", value > 0);
    };
    InterActiveChatBase2.prototype.updateFooterElementClass = function() {
      if (isNullOrUndefined(this.editableTextarea)) {
        return;
      }
      var textarea = this.editableTextarea;
      textarea.style.height = "auto";
      this.footer.classList.remove("e-footer-expanded");
      this.footer.classList[textarea.scrollHeight > parseInt(getComputedStyle(textarea).minHeight, 10) ? "add" : "remove"]("e-footer-expanded");
    };
    InterActiveChatBase2.prototype.updatePlaceholder = function(placeholder) {
      if (this.editableTextarea) {
        this.editableTextarea.setAttribute("placeholder", placeholder);
      }
    };
    InterActiveChatBase2.prototype.pushToUndoStack = function(value) {
      var _a = this.getCursorPosition(), start = _a.start, end = _a.end;
      var state = {
        content: value,
        selectionStart: start,
        selectionEnd: end
      };
      if (this.undoStack.length === 0 || this.undoStack[this.undoStack.length - 1].content !== value) {
        this.undoStack.push(state);
        if (this.undoStack.length > 100) {
          this.undoStack.shift();
        }
      }
    };
    InterActiveChatBase2.prototype.handleUndoRedo = function(event2) {
      var isUndo = (event2.ctrlKey || event2.metaKey) && event2.key === "z" && !event2.shiftKey;
      var isRedo = (event2.ctrlKey || event2.metaKey) && (event2.key === "y" || event2.key === "z" && event2.shiftKey);
      if (isUndo) {
        event2.preventDefault();
        this.undo(event2);
      } else if (isRedo) {
        event2.preventDefault();
        this.redo(event2);
      }
    };
    InterActiveChatBase2.prototype.undo = function(event2) {
      if (this.undoStack.length <= 1) {
        return;
      }
      var current = this.undoStack.pop();
      var previous = this.undoStack[this.undoStack.length - 1];
      this.redoStack.push(current);
      this.applyPromptChange(previous, current, event2);
    };
    InterActiveChatBase2.prototype.redo = function(event2) {
      if (this.redoStack.length === 0) {
        return;
      }
      var current = {
        content: this.editableTextarea.textContent,
        selectionStart: this.getCursorPosition().start,
        selectionEnd: this.getCursorPosition().end
      };
      var next = this.redoStack.pop();
      this.undoStack.push(next);
      this.applyPromptChange(next, current, event2);
    };
    InterActiveChatBase2.prototype.setFocusAtEnd = function(textArea) {
      var range = document.createRange();
      var selection = window.getSelection();
      range.selectNodeContents(textArea);
      range.collapse(false);
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
    InterActiveChatBase2.prototype.getCursorPosition = function() {
      var selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return { start: 0, end: 0 };
      }
      var range = selection.getRangeAt(0);
      var startContainer = range.startContainer, startOffset = range.startOffset, endContainer = range.endContainer, endOffset = range.endOffset;
      var charCount = 0;
      var start = -1;
      var end = -1;
      if (this.editableTextarea !== null) {
        var walker = document.createTreeWalker(this.editableTextarea, NodeFilter.SHOW_TEXT, null);
        var currentNode = walker.nextNode();
        while (currentNode !== null) {
          if (currentNode === startContainer) {
            start = charCount + startOffset;
          }
          if (currentNode === endContainer) {
            end = charCount + endOffset;
          }
          if (start !== -1 && end !== -1) {
            break;
          }
          charCount += currentNode.textContent.length;
          currentNode = walker.nextNode();
        }
      }
      if (start === -1) {
        start = 0;
      }
      if (end === -1) {
        end = 0;
      }
      return { start, end };
    };
    InterActiveChatBase2.prototype.findTextNodeAndOffset = function(element, targetOffset) {
      var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
      var currentNode = walker.nextNode();
      var cumulativeOffset = 0;
      while (currentNode !== null) {
        var nodeLength = currentNode.textContent.length;
        if (cumulativeOffset + nodeLength >= targetOffset) {
          return { node: currentNode, offset: targetOffset - cumulativeOffset };
        }
        cumulativeOffset += nodeLength;
        currentNode = walker.nextNode();
      }
      walker.currentNode = element;
      var lastNode = walker.lastChild();
      if (lastNode) {
        return { node: lastNode, offset: lastNode.textContent.length };
      }
      return null;
    };
    InterActiveChatBase2.prototype.setCursorPosition = function(start, end) {
      var selection = window.getSelection();
      if (!selection) {
        return;
      }
      var startNodeInfo = this.findTextNodeAndOffset(this.editableTextarea, start);
      var endNodeInfo = this.findTextNodeAndOffset(this.editableTextarea, end);
      if (startNodeInfo && endNodeInfo) {
        var range = document.createRange();
        range.setStart(startNodeInfo.node, startNodeInfo.offset);
        range.setEnd(endNodeInfo.node, endNodeInfo.offset);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
    InterActiveChatBase2.prototype.clearBreakTags = function(element) {
      element.innerHTML = element.innerHTML.replace(/<br>/g, "").trim();
    };
    InterActiveChatBase2.prototype.handlePaste = function(event2) {
      event2.preventDefault();
      var pasteContent = event2.clipboardData.getData("text/plain") || "";
      var selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return;
      }
      var range = selection.getRangeAt(0);
      range.deleteContents();
      var lines = pasteContent.split(/\r?\n/);
      var fragment = document.createDocumentFragment();
      lines.forEach(function(line, index) {
        if (line) {
          fragment.appendChild(document.createTextNode(line));
        }
        if (index < lines.length - 1) {
          fragment.appendChild(document.createElement("br"));
        }
      });
      range.insertNode(fragment);
      this.setFocusAtEnd(this.editableTextarea);
      this.redoStack = [];
      var inputEvent = new CustomEvent("input", {
        bubbles: true,
        cancelable: true,
        detail: {
          inputType: "insertFromPaste",
          data: this.editableTextarea.innerText,
          isComposing: false
        }
      });
      this.editableTextarea.dispatchEvent(inputEvent);
      this.pushToUndoStack(this.editableTextarea.innerHTML);
      this.updateScroll(this.editableTextarea);
    };
    InterActiveChatBase2.prototype.getCurrentState = function() {
      var position = this.getCursorPosition();
      return {
        content: this.editableTextarea !== null ? this.editableTextarea.innerHTML : "",
        selectionStart: position.start,
        selectionEnd: position.end
      };
    };
    InterActiveChatBase2.prototype.scheduleUndoPush = function() {
      var _this = this;
      if (this.undoDelayTimer) {
        clearTimeout(this.undoDelayTimer);
      }
      this.undoDelayTimer = setTimeout(function() {
        var lastState = _this.undoStack[_this.undoStack.length - 1];
        var currentState = _this.getCurrentState();
        if (!lastState || lastState.content !== currentState.content) {
          _this.undoStack.push(currentState);
        }
      }, 400);
    };
    InterActiveChatBase2.prototype.renderFailureAlert = function(viewWrapper, failureMessage, failureType, circleCloseIconClass, closeIconClass) {
      var _this = this;
      var alertElement = this.createElement("div", {
        className: "e-upload-failure-alert",
        innerHTML: '\n                <span class="e-icons ' + circleCloseIconClass + '" aria-label="Upload failure"></span>\n                <div class="e-failure-message ' + failureType + '">' + failureMessage + '</div>\n                <span class="e-icons ' + closeIconClass + '" role="button" tabindex="0" aria-label="Close"></span>\n            '
      });
      EventHandler.add(alertElement, "click", function() {
        _this.handleFailureAlertRemove(viewWrapper, alertElement);
      }, this);
      return alertElement;
    };
    InterActiveChatBase2.prototype.handleFailureAlertRemove = function(viewWrapper, alertElement) {
      alertElement.classList.remove("e-show");
      EventHandler.remove(alertElement, "click", this.handleFailureAlertRemove);
      if (viewWrapper && viewWrapper.contains(alertElement)) {
        viewWrapper.removeChild(alertElement);
      }
    };
    InterActiveChatBase2.prototype.wireFooterEvents = function(footerTemplate) {
      if (this.sendIcon) {
        EventHandler.add(this.sendIcon, "click", this.onSendIconClick, this);
      }
      if (this.footer && !footerTemplate) {
        EventHandler.add(this.footer, "keydown", this.footerKeyHandler, this);
      }
      if (this.editableTextarea) {
        EventHandler.add(this.editableTextarea, "focus", this.onFocusEditableTextarea, this);
        EventHandler.add(this.editableTextarea, "blur", this.onBlurEditableTextarea, this);
        EventHandler.add(this.editableTextarea, "paste", this.handlePaste, this);
        EventHandler.add(this.editableTextarea, "input", this.handleInput, this);
        EventHandler.add(window, "resize", this.updateFooterElementClass, this);
      }
    };
    InterActiveChatBase2.prototype.unWireFooterEvents = function(footerTemplate) {
      if (this.sendIcon) {
        EventHandler.remove(this.sendIcon, "click", this.onSendIconClick);
      }
      if (this.footer && !footerTemplate) {
        EventHandler.remove(this.footer, "keydown", this.footerKeyHandler);
      }
      if (this.editableTextarea) {
        EventHandler.remove(this.editableTextarea, "focus", this.onFocusEditableTextarea);
        EventHandler.remove(this.editableTextarea, "blur", this.onBlurEditableTextarea);
        EventHandler.remove(this.editableTextarea, "paste", this.handlePaste);
        EventHandler.remove(this.editableTextarea, "input", this.handleInput);
        EventHandler.remove(window, "resize", this.updateFooterElementClass);
      }
    };
    InterActiveChatBase2.prototype.removeAndNullify = function(element) {
      if (element) {
        if (!isNullOrUndefined(element.parentNode)) {
          remove(element);
        } else {
          element.innerHTML = "";
        }
      }
    };
    InterActiveChatBase2.prototype.destroyAndNullify = function(obj) {
      if (obj) {
        obj.destroy();
        obj = null;
      }
    };
    InterActiveChatBase2.prototype.getTemplateFunction = function(template, notCompile) {
      if (typeof template === "string") {
        var content = "";
        try {
          var tempEle = select(template);
          if (tempEle) {
            content = tempEle.tagName === "SCRIPT" ? tempEle.innerHTML : tempEle.outerHTML;
            notCompile = false;
          } else {
            content = template;
          }
        } catch (e) {
          content = template;
        }
        return notCompile ? content : compile(content);
      } else {
        return compile(template);
      }
    };
    InterActiveChatBase2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    __decorate2([
      Event()
    ], InterActiveChatBase2.prototype, "created", void 0);
    InterActiveChatBase2 = __decorate2([
      NotifyPropertyChanges
    ], InterActiveChatBase2);
    return InterActiveChatBase2;
  })(Component2)
);

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/rules.js
var noopTest = { exec: function() {
  return null;
} };
function edit(regex, opt) {
  if (opt === void 0) {
    opt = "";
  }
  var source = typeof regex === "string" ? regex : regex.source;
  var obj = {
    replace: function(name, val) {
      var valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: function() {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  // eslint-disable-next-line no-useless-escape
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[a-zA-Z0-9\u00C0-\u017F\u0100-\u024F]/,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  // eslint-disable-next-line no-useless-escape
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: function(bull) {
    return new RegExp("^( {0,3}" + bull + ")((?:[	 ][^\\n]*)?(?:\\n|$))");
  },
  nextBulletRegex: function(indent) {
    return new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))");
  },
  hrRegex: function(indent) {
    return new RegExp("^ {0," + Math.min(3, indent - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)");
  },
  fencesBeginRegex: function(indent) {
    return new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:```|~~~)");
  },
  headingBeginRegex: function(indent) {
    return new RegExp("^ {0," + Math.min(3, indent - 1) + "}#");
  },
  htmlBeginRegex: function(indent) {
    return new RegExp("^ {0," + Math.min(3, indent - 1) + "}<(?:[a-z].*>|!--)", "i");
  }
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = Object.assign({}, blockNormal, {
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = Object.assign({}, blockNormal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/;
var _punctuationOrSpace = /[\s!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/;
var _notPunctuationOrSpace = /[^\s!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/;
var punctuation = edit(/^((?![*_])punctSpace)/).replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}]/;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}]/;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}]|~)/;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore).replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "g").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "g").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "g").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "g").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = Object.assign({}, inlineNormal, {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = Object.assign({}, inlineNormal, {
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  // eslint-disable-next-line no-useless-escape
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  // eslint-disable-next-line no-useless-escape
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = Object.assign({}, inlineGfm, {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/utils.js
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = function(ch) {
  return escapeReplacements[ch];
};
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch (_a) {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  var row = tableRow.replace(other.findPipe, function(match, offset, str) {
    var escaped = false;
    var curr = offset;
    while (--curr >= 0 && str[curr] === "\\") {
      escaped = !escaped;
    }
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  });
  var cells = row.split(other.splitPipe);
  var i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && cells[cells.length - 1].trim() === "") {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push("");
      }
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function removeTrailingSpace(str, c, invert) {
  var l = str.length;
  if (l === 0) {
    return "";
  }
  var suffLen = 0;
  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function getDefaults() {
  return {
    async: false,
    lineBreak: false,
    gfm: true,
    silent: false
  };
}
function stringTrimStart(value) {
  return value.replace(/^\s+/, "");
}
function stringTrimEnd(value) {
  return value.replace(/\s+$/, "");
}
function arrayAt(arr, index) {
  if (index < 0) {
    index = arr.length + index;
  }
  if (index < 0 || index >= arr.length) {
    return void 0;
  }
  return arr[index];
}

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/tokenizer.js
var Tokenizer = (
  /** @class */
  (function() {
    function Tokenizer2(options) {
      this.options = options || getDefaults();
    }
    Tokenizer2.prototype.parseSpace = function(mdSource) {
      var newlineMatch = this.rules.block.newline.exec(mdSource);
      if (newlineMatch && newlineMatch[0].length > 0) {
        return { type: "space", raw: newlineMatch[0] };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseAtxHeading = function(mdSource) {
      var match = this.rules.block.heading.exec(mdSource);
      if (match) {
        var text = match[2].trim();
        if (this.rules.other.endingHash.test(text)) {
          var trimmedText = removeTrailingSpace(text, "#");
          text = trimmedText.trim();
        }
        return {
          type: "heading",
          raw: match[0],
          depth: match[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseParagraph = function(mdSource) {
      var match = this.rules.block.paragraph.exec(mdSource);
      if (match) {
        var text = match[1].charAt(match[1].length - 1) === "\n" ? match[1].slice(0, -1) : match[1];
        return { type: "paragraph", raw: match[0], text, tokens: this.lexer.inline(text) };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseText = function(mdSource) {
      var match = this.rules.block.text.exec(mdSource);
      if (match) {
        return { type: "text", raw: match[0], text: match[0], tokens: this.lexer.inline(match[0]) };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseInlineText = function(mdSource) {
      var match = this.rules.inline.text.exec(mdSource);
      if (match) {
        var escaped = this.lexer.state.inRawBlock;
        return { type: "text", raw: match[0], text: match[0], escaped };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseEmphasisOrStrong = function(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = "";
      }
      var openingDelimMatch = this.rules.inline.emStrongLDelim.exec(src);
      if (!openingDelimMatch) {
        return void 0;
      }
      if (openingDelimMatch[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) {
        return void 0;
      }
      var nextChar = openingDelimMatch[1] || openingDelimMatch[2] || "";
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        var leftLen = Array.from(openingDelimMatch[0]).length - 1;
        var rightDelim = void 0;
        var rightLen = void 0;
        var delimTotal = leftLen;
        var midBalancing = 0;
        var closeRegex = openingDelimMatch[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        closeRegex.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + leftLen);
        while ((openingDelimMatch = closeRegex.exec(maskedSrc)) != null) {
          rightDelim = openingDelimMatch[1] || openingDelimMatch[2] || openingDelimMatch[3] || openingDelimMatch[4] || openingDelimMatch[5] || openingDelimMatch[6];
          if (!rightDelim) {
            continue;
          }
          rightLen = Array.from(rightDelim).length;
          if (openingDelimMatch[3] || openingDelimMatch[4]) {
            delimTotal += rightLen;
            continue;
          } else if (openingDelimMatch[5] || openingDelimMatch[6]) {
            if (leftLen % 3 && !((leftLen + rightLen) % 3)) {
              midBalancing += rightLen;
              continue;
            }
          }
          delimTotal -= rightLen;
          if (delimTotal > 0) {
            continue;
          }
          rightLen = Math.min(rightLen, rightLen + delimTotal + midBalancing);
          var lastCharLength = Array.from(openingDelimMatch[0])[0].length;
          var raw = src.slice(0, leftLen + openingDelimMatch.index + lastCharLength + rightLen);
          if (Math.min(leftLen, rightLen) % 2) {
            var inner_1 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: inner_1,
              tokens: this.lexer.tokenizeInline(inner_1)
            };
          }
          var inner = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text: inner,
            tokens: this.lexer.tokenizeInline(inner)
          };
        }
      }
      return void 0;
    };
    Tokenizer2.prototype.parseStrikethrough = function(mdSource) {
      var match = this.rules.inline.del.exec(mdSource);
      if (match) {
        return {
          type: "del",
          raw: match[0],
          text: match[2],
          tokens: this.lexer.tokenizeInline(match[2])
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.ParseHorizontalRule = function(mdSource) {
      var match = this.rules.block.hr.exec(mdSource);
      if (match) {
        return {
          type: "hr",
          raw: removeTrailingSpace(match[0], "\n")
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseBreak = function(mdSource) {
      var match = this.rules.inline.br.exec(mdSource);
      if (match) {
        return {
          type: "br",
          raw: match[0]
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseIndentedCode = function(mdSource) {
      var match = this.rules.block.code.exec(mdSource);
      if (match) {
        var text = match[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: match[0],
          codeBlockStyle: "indented",
          text: this.options.gfm ? removeTrailingSpace(text, "\n") : text
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseCodespan = function(mdSource) {
      var match = this.rules.inline.code.exec(mdSource);
      if (match) {
        var text = match[2].replace(this.rules.other.newLineCharGlobal, " ");
        var hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
        var hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        return {
          type: "codespan",
          raw: match[0],
          text
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.indentCodeCompensation = function(raw, text, rules) {
      var matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
      if (matchIndentToCode === null) {
        return text;
      }
      var indentToCode = matchIndentToCode[1];
      return text.split("\n").map(function(line) {
        var matchIndentInLine = line.match(rules.other.beginningSpace);
        if (matchIndentInLine === null) {
          return line;
        }
        var indentInLine = matchIndentInLine[0];
        if (indentInLine.length >= indentToCode.length) {
          return line.slice(indentToCode.length);
        }
        return line;
      }).join("\n");
    };
    Tokenizer2.prototype.outputLink = function(cap, link2, raw, lexer, rules) {
      var href = link2.href;
      var title = link2.title || null;
      var text = cap[1].replace(rules.other.outputLinkReplace, "$1");
      lexer.state.inLink = true;
      var token = {
        type: cap[0].charAt(0) === "!" ? "image" : "link",
        raw,
        href,
        title,
        text,
        tokens: lexer.tokenizeInline(text)
      };
      lexer.state.inLink = false;
      return token;
    };
    Tokenizer2.prototype.parseFencedCode = function(mdSource) {
      var match = this.rules.block.fences.exec(mdSource);
      if (match) {
        var raw = match[0];
        var text = this.indentCodeCompensation(raw, match[3] || "", this.rules);
        return {
          type: "code",
          raw,
          lang: match[2] ? match[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : match[2],
          text
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseBlockquote = function(mdSource) {
      var match = this.rules.block.blockquote.exec(mdSource);
      if (match) {
        var lines = removeTrailingSpace(match[0], "\n").split("\n");
        var raw = "";
        var text = "";
        var tokens = [];
        while (lines.length > 0) {
          var inBlockquote = false;
          var currentLines = [];
          var i = void 0;
          for (i = 0; i < lines.length; i++) {
            if (this.rules.other.blockquoteStart.test(lines[i])) {
              currentLines.push(lines[i]);
              inBlockquote = true;
            } else if (!inBlockquote) {
              currentLines.push(lines[i]);
            } else {
              break;
            }
          }
          lines = lines.slice(i);
          var currentRaw = currentLines.join("\n");
          var currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
          raw = raw ? raw + "\n" + currentRaw : currentRaw;
          text = text ? text + "\n" + currentText : currentText;
          var top_1 = this.lexer.state.top;
          this.lexer.state.top = true;
          this.lexer.tokenizeBlocks(currentText, tokens, true);
          this.lexer.state.top = top_1;
          if (lines.length === 0) {
            break;
          }
          var lastToken = arrayAt(tokens, -1);
          if (lastToken && lastToken.type === "code") {
            break;
          } else if (lastToken && lastToken.type === "blockquote") {
            var oldToken = lastToken;
            var newText = oldToken.raw + "\n" + lines.join("\n");
            var newToken = this.parseBlockquote(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
            break;
          } else if (lastToken && lastToken.type === "list") {
            var oldToken = lastToken;
            var newText = oldToken.raw + "\n" + lines.join("\n");
            var newToken = this.parseList(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
            lines = newText.substring(arrayAt(tokens, -1).raw.length).split("\n");
            continue;
          }
        }
        return {
          type: "blockquote",
          raw,
          tokens,
          text
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseSetextHeading = function(mdSource) {
      var match = this.rules.block.lheading.exec(mdSource);
      if (match) {
        return {
          type: "heading",
          raw: match[0],
          depth: match[2].charAt(0) === "=" ? 1 : 2,
          text: match[1],
          tokens: this.lexer.inline(match[1])
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseLink = function(mdSource) {
      var match = this.rules.inline.link.exec(mdSource);
      if (match) {
        var trimmedUrl = match[2].trim();
        if (this.options.gfm && this.rules.other.startAngleBracket.test(trimmedUrl)) {
          if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
            return void 0;
          }
          var rtrimSlash = removeTrailingSpace(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return void 0;
          }
        } else {
          var lastParenIndex = findClosingBracket(match[2], "()");
          if (lastParenIndex === -2) {
            return void 0;
          }
          if (lastParenIndex > -1) {
            var start = match[0].indexOf("!") === 0 ? 5 : 4;
            var linkLen = start + match[1].length + lastParenIndex;
            match[2] = match[2].substring(0, lastParenIndex);
            match[0] = match[0].substring(0, linkLen).trim();
            match[3] = "";
          }
        }
        var href = match[2];
        var title = "";
        if (!this.options.gfm) {
          var link2 = this.rules.other.pedanticHrefTitle.exec(href);
          if (link2) {
            href = link2[1];
            title = link2[3];
          }
        } else {
          title = match[3] ? match[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (this.rules.other.startAngleBracket.test(href)) {
          if (!this.options.gfm && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return this.outputLink(match, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
        }, match[0], this.lexer, this.rules);
      }
      return void 0;
    };
    Tokenizer2.prototype.parseReferenceLink = function(mdSource, links) {
      if (!links) {
        return void 0;
      }
      var match;
      if ((match = this.rules.inline.reflink.exec(mdSource)) || (match = this.rules.inline.nolink.exec(mdSource))) {
        var linkString = (match[2] || match[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
        var link2 = links[linkString.toLowerCase()];
        if (!link2) {
          var text = match[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return this.outputLink(match, link2, match[0], this.lexer, this.rules);
      }
      return void 0;
    };
    Tokenizer2.prototype.parseAutoLink = function(mdSource) {
      var match = this.rules.inline.autolink.exec(mdSource);
      if (match) {
        var text = void 0;
        var href = void 0;
        if (match[2] === "@") {
          text = match[1];
          href = "mailto:" + text;
        } else {
          text = match[1];
          href = text;
        }
        return {
          type: "link",
          raw: match[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseBareUrl = function(mdSource) {
      if (!this.options.gfm) {
        return void 0;
      }
      if (this.lexer && this.lexer.state.inLink) {
        return void 0;
      }
      var match;
      if (match = this.rules.inline.url.exec(mdSource)) {
        var text = void 0;
        var href = void 0;
        if (match[2] === "@") {
          text = match[0];
          href = "mailto:" + text;
        } else {
          var prevCapZero = void 0;
          do {
            prevCapZero = match[0];
            match[0] = this.rules.inline._backpedal.exec(match[0]) ? this.rules.inline._backpedal.exec(match[0])[0] : "";
          } while (prevCapZero !== match[0]);
          text = match[0];
          if (match[1] === "www.") {
            href = "http://" + match[0];
          } else {
            href = match[0];
          }
        }
        return {
          type: "link",
          raw: match[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseDefinition = function(mdSource) {
      var match = this.rules.block.def.exec(mdSource);
      if (match) {
        var tag2 = match[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
        var href = match[2] ? match[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
        var title = match[3] ? match[3].substring(1, match[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : match[3];
        return {
          type: "def",
          tag: tag2,
          raw: match[0],
          href,
          title
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseEscape = function(mdSource) {
      var match = this.rules.inline.escape.exec(mdSource);
      if (match) {
        return {
          type: "escape",
          raw: match[0],
          text: match[1]
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseList = function(mdSource) {
      var _this = this;
      var match = this.rules.block.list.exec(mdSource);
      if (match) {
        var bullet2 = match[1].trim();
        var isordered = bullet2.length > 1;
        var list2 = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bullet2.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bullet2 = isordered ? "\\d{1,9}\\" + bullet2.slice(-1) : "\\" + bullet2;
        if (!this.options.gfm) {
          bullet2 = isordered ? bullet2 : "[*+-]";
        }
        var itemRegex = this.rules.other.listItemRegex(bullet2);
        var endsWithBlankLine = false;
        while (mdSource) {
          var endEarly = false;
          var raw = "";
          var itemContents = "";
          if (!(match = itemRegex.exec(mdSource))) {
            break;
          }
          if (this.rules.block.hr.test(mdSource)) {
            break;
          }
          raw = match[0];
          mdSource = mdSource.substring(raw.length);
          var line = match[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, function(t) {
            return " ".repeat(3 * t.length);
          });
          var nextLine = mdSource.split("\n", 1)[0];
          var blankLine = !line.trim();
          var indent = 0;
          if (!this.options.gfm) {
            indent = 2;
            itemContents = stringTrimStart(line);
          } else if (blankLine) {
            indent = match[1].length + 1;
          } else {
            indent = match[2].search(this.rules.other.nonSpaceChar);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += match[1].length;
          }
          if (blankLine && this.rules.other.blankLine.test(nextLine)) {
            raw += nextLine + "\n";
            mdSource = mdSource.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = this.rules.other.nextBulletRegex(indent);
            var hrRegex = this.rules.other.hrRegex(indent);
            var fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
            var headingBeginRegex = this.rules.other.headingBeginRegex(indent);
            var htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
            while (mdSource) {
              var rawLine = mdSource.split("\n", 1)[0];
              var nextLineWithoutTabs = void 0;
              nextLine = rawLine;
              if (!this.options.gfm) {
                nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
                nextLineWithoutTabs = nextLine;
              } else {
                nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (htmlBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(nextLine)) {
                break;
              }
              if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLineWithoutTabs.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (fencesBeginRegex.test(nextLine) || headingBeginRegex.test(nextLine) || hrRegex.test(nextLine) || htmlBeginRegex.test(nextLine)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              mdSource = mdSource.substring(rawLine.length + 1);
              line = nextLineWithoutTabs.slice(indent);
            }
          }
          if (!list2.loose) {
            if (endsWithBlankLine) {
              list2.loose = true;
            } else if (this.rules.other.doubleBlankLine.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          var istask = null;
          var ischecked = void 0;
          if (this.options.gfm) {
            istask = this.rules.other.listIsTask.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
            }
          }
          list2.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          list2.raw += raw;
        }
        var lastItem = arrayAt(list2.items, -1);
        if (lastItem) {
          lastItem.raw = stringTrimEnd(lastItem.raw);
          lastItem.text = stringTrimEnd(lastItem.text);
        } else {
          return void 0;
        }
        list2.raw = stringTrimEnd(list2.raw);
        for (var i = 0; i < list2.items.length; i++) {
          this.lexer.state.top = false;
          list2.items[i].tokens = this.lexer.tokenizeBlocks(list2.items[i].text, []);
          if (!list2.loose) {
            var spacers = list2.items[i].tokens.filter(function(t) {
              return t.type === "space";
            });
            var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function(t) {
              return _this.rules.other.anyLine.test(t.raw);
            });
            list2.loose = hasMultipleLineBreaks;
          }
        }
        if (list2.loose) {
          for (var i = 0; i < list2.items.length; i++) {
            list2.items[i].loose = true;
          }
        }
        return list2;
      }
      return void 0;
    };
    Tokenizer2.prototype.parseHtmlBlock = function(mdSource) {
      var match = this.rules.block.html.exec(mdSource);
      if (match) {
        var token = {
          type: "html",
          block: true,
          raw: match[0],
          pre: match[1] === "pre" || match[1] === "script" || match[1] === "style",
          text: match[0]
        };
        return token;
      }
      return void 0;
    };
    Tokenizer2.prototype.parseHtmlTag = function(mdSource) {
      var match = this.rules.inline.tag.exec(mdSource);
      if (match) {
        if (!this.lexer.state.inLink && this.rules.other.startATag.test(match[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && this.rules.other.endATag.test(match[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(match[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(match[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: match[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: match[0]
        };
      }
      return void 0;
    };
    Tokenizer2.prototype.parseTable = function(mdSource) {
      var _this = this;
      var match = this.rules.block.table.exec(mdSource);
      if (!match) {
        return void 0;
      }
      if (!this.rules.other.tableDelimiter.test(match[2])) {
        return void 0;
      }
      var headers = splitCells(match[1]);
      var aligns = match[2].replace(this.rules.other.tableAlignChars, "").split("|");
      var rows = match[3] && match[3].trim() ? match[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
      var item = {
        type: "table",
        raw: match[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        return void 0;
      }
      for (var _i = 0, aligns_1 = aligns; _i < aligns_1.length; _i++) {
        var align = aligns_1[_i];
        if (this.rules.other.tableAlignRight.test(align)) {
          item.align.push("right");
        } else if (this.rules.other.tableAlignCenter.test(align)) {
          item.align.push("center");
        } else if (this.rules.other.tableAlignLeft.test(align)) {
          item.align.push("left");
        } else {
          item.align.push(null);
        }
      }
      for (var i = 0; i < headers.length; i++) {
        item.header.push({
          text: headers[i],
          tokens: this.lexer.inline(headers[i]),
          header: true,
          align: item.align[i]
        });
      }
      for (var _a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
        var row = rows_1[_a];
        item.rows.push(splitCells(row, item.header.length).map(function(cell, i2) {
          return {
            text: cell,
            tokens: _this.lexer.inline(cell),
            header: false,
            align: item.align[i2]
          };
        }));
      }
      return item;
    };
    return Tokenizer2;
  })()
);

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/lexer.js
var Lexer = (
  /** @class */
  (function() {
    function Lexer2(options) {
      this.rules = {
        other,
        block: block.normal,
        inline: inline.normal
      };
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options || getDefaults();
      this.tokenizer = new Tokenizer();
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      var rules = {
        other,
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.gfm) {
        rules.block = block.gfm;
        rules.inline = this.options.lineBreak ? inline.breaks : inline.gfm;
      } else {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      }
      this.tokenizer.rules = rules;
    }
    Lexer2.lex = function(src, options) {
      var lexer = new Lexer2(options);
      return lexer.lex(src);
    };
    Lexer2.prototype.lex = function(mdSource) {
      mdSource = mdSource.replace(other.carriageReturn, "\n");
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.tokenizeBlocks(mdSource, this.tokens);
      for (var i = 0; i < this.inlineQueue.length; i++) {
        var next = this.inlineQueue[i];
        this.tokenizeInline(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    };
    Lexer2.prototype.tokenizeBlocks = function(mdSource, tokens, lastParagraphClipped) {
      if (!this.options.gfm) {
        mdSource = mdSource.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
      }
      while (mdSource) {
        var spaceToken = this.tokenizer.parseSpace(mdSource);
        if (spaceToken) {
          mdSource = mdSource.substring(spaceToken.raw.length);
          var lastToken = arrayAt(tokens, -1);
          if (spaceToken.raw.length === 1 && lastToken !== void 0) {
            lastToken.raw += "\n";
          } else {
            tokens.push(spaceToken);
          }
          continue;
        }
        var headingToken = this.tokenizer.parseAtxHeading(mdSource);
        if (headingToken) {
          mdSource = mdSource.substring(headingToken.raw.length);
          tokens.push(headingToken);
          continue;
        }
        var hrToken = this.tokenizer.ParseHorizontalRule(mdSource);
        if (hrToken) {
          mdSource = mdSource.substring(hrToken.raw.length);
          tokens.push(hrToken);
          continue;
        }
        var codeToken = this.tokenizer.parseIndentedCode(mdSource);
        if (codeToken) {
          mdSource = mdSource.substring(codeToken.raw.length);
          var lastToken = arrayAt(tokens, -1);
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") && "text" in lastToken) {
            lastToken.raw += "\n" + codeToken.raw;
            lastToken.text += "\n" + codeToken.text;
            arrayAt(this.inlineQueue, -1).src = lastToken.text;
          } else {
            tokens.push(codeToken);
          }
          continue;
        }
        var fenceToken = this.tokenizer.parseFencedCode(mdSource);
        if (fenceToken) {
          mdSource = mdSource.substring(fenceToken.raw.length);
          tokens.push(fenceToken);
          continue;
        }
        var blockquoteToken = this.tokenizer.parseBlockquote(mdSource);
        if (blockquoteToken) {
          mdSource = mdSource.substring(blockquoteToken.raw.length);
          tokens.push(blockquoteToken);
          continue;
        }
        var levelHeadingToken = this.tokenizer.parseSetextHeading(mdSource);
        if (levelHeadingToken) {
          mdSource = mdSource.substring(levelHeadingToken.raw.length);
          tokens.push(levelHeadingToken);
          continue;
        }
        var defToken = this.tokenizer.parseDefinition(mdSource);
        if (defToken) {
          mdSource = mdSource.substring(defToken.raw.length);
          var lastToken = arrayAt(tokens, -1);
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") && "text" in lastToken) {
            lastToken.raw += "\n" + defToken.raw;
            lastToken.text += "\n" + defToken.raw;
            arrayAt(this.inlineQueue, -1).src = lastToken.text;
          } else if (!this.tokens.links[defToken.tag]) {
            this.tokens.links[defToken.tag] = {
              href: defToken.href,
              title: defToken.title
            };
          }
          continue;
        }
        var listToken = this.tokenizer.parseList(mdSource);
        if (listToken) {
          mdSource = mdSource.substring(listToken.raw.length);
          tokens.push(listToken);
          continue;
        }
        var htmlToken = this.tokenizer.parseHtmlBlock(mdSource);
        if (htmlToken) {
          mdSource = mdSource.substring(htmlToken.raw.length);
          tokens.push(htmlToken);
          continue;
        }
        var tableToken = this.tokenizer.parseTable(mdSource);
        if (tableToken) {
          mdSource = mdSource.substring(tableToken.raw.length);
          tokens.push(tableToken);
          continue;
        }
        if (this.state.top) {
          var paragraphToken = this.tokenizer.parseParagraph(mdSource);
          if (paragraphToken) {
            var lastToken = arrayAt(tokens, -1);
            if (lastParagraphClipped && lastToken && lastToken.type === "paragraph" && "text" in lastToken) {
              lastToken.raw += "\n" + paragraphToken.raw;
              lastToken.text += "\n" + paragraphToken.text;
              this.inlineQueue.pop();
              arrayAt(this.inlineQueue, -1).mdSource = lastToken.text;
            } else {
              tokens.push(paragraphToken);
            }
            lastParagraphClipped = mdSource.length !== mdSource.length;
            mdSource = mdSource.substring(paragraphToken.raw.length);
            continue;
          }
        }
        var textToken = this.tokenizer.parseText(mdSource);
        if (textToken) {
          mdSource = mdSource.substring(textToken.raw.length);
          var lastToken = arrayAt(tokens, -1);
          if (lastToken && lastToken.type === "text" && "text" in lastToken) {
            lastToken.raw += "\n" + textToken.raw;
            lastToken.text += "\n" + textToken.text;
            this.inlineQueue.pop();
            arrayAt(this.inlineQueue, -1).src = lastToken.text;
          } else {
            tokens.push(textToken);
          }
          continue;
        }
        if (mdSource) {
          var errMsg = "Infinite loop on byte: " + mdSource.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    };
    Lexer2.prototype.inline = function(src, tokens) {
      if (tokens === void 0) {
        tokens = [];
      }
      this.inlineQueue.push({ src, tokens });
      return tokens;
    };
    Lexer2.prototype.tokenizeInline = function(mdSource, tokens) {
      if (tokens === void 0) {
        tokens = [];
      }
      var maskedSrc = mdSource;
      var match = null;
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          var reflinkMatch = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc);
          while (reflinkMatch != null) {
            if (links.indexOf(reflinkMatch[0].slice(reflinkMatch[0].lastIndexOf("[") + 1, -1)) !== -1) {
              maskedSrc = maskedSrc.slice(0, reflinkMatch.index) + "[" + "a".repeat(reflinkMatch[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
            reflinkMatch = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc);
          }
        }
      }
      match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc);
      while (match != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc);
      }
      match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc);
      while (match != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc);
      }
      var keepPrevChar = false;
      var prevChar = "";
      while (mdSource) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        var boldToken = this.tokenizer.parseEmphasisOrStrong(mdSource, maskedSrc, prevChar);
        if (boldToken) {
          mdSource = mdSource.substring(boldToken.raw.length);
          tokens.push(boldToken);
          continue;
        }
        var delToken = this.tokenizer.parseStrikethrough(mdSource);
        if (delToken) {
          mdSource = mdSource.substring(delToken.raw.length);
          tokens.push(delToken);
          continue;
        }
        var brToken = this.tokenizer.parseBreak(mdSource);
        if (brToken) {
          mdSource = mdSource.substring(brToken.raw.length);
          tokens.push(brToken);
          continue;
        }
        var codeToken = this.tokenizer.parseCodespan(mdSource);
        if (codeToken) {
          mdSource = mdSource.substring(codeToken.raw.length);
          tokens.push(codeToken);
          continue;
        }
        var linkToken = this.tokenizer.parseLink(mdSource);
        if (linkToken) {
          mdSource = mdSource.substring(linkToken.raw.length);
          tokens.push(linkToken);
          continue;
        }
        var refLinkToken = this.tokenizer.parseReferenceLink(mdSource, this.tokens.links);
        if (refLinkToken) {
          mdSource = mdSource.substring(refLinkToken.raw.length);
          var lastToken = arrayAt(tokens, -1);
          if (refLinkToken.type === "text" && lastToken && lastToken.type === "text" && "text" in lastToken) {
            lastToken.raw += refLinkToken.raw;
            lastToken.text += refLinkToken.text;
          } else {
            tokens.push(refLinkToken);
          }
          continue;
        }
        var autoLinkToken = this.tokenizer.parseAutoLink(mdSource);
        if (autoLinkToken) {
          mdSource = mdSource.substring(autoLinkToken.raw.length);
          tokens.push(autoLinkToken);
          continue;
        }
        var urlToken = this.tokenizer.parseBareUrl(mdSource);
        if (!this.state.inLink && urlToken) {
          mdSource = mdSource.substring(urlToken.raw.length);
          tokens.push(urlToken);
          continue;
        }
        var escapeToken = this.tokenizer.parseEscape(mdSource);
        if (escapeToken) {
          mdSource = mdSource.substring(escapeToken.raw.length);
          tokens.push(escapeToken);
          continue;
        }
        var tagToken = this.tokenizer.parseHtmlTag(mdSource);
        if (tagToken) {
          mdSource = mdSource.substring(tagToken.raw.length);
          tokens.push(tagToken);
          continue;
        }
        var inlineTextToken = this.tokenizer.parseInlineText(mdSource);
        if (inlineTextToken) {
          mdSource = mdSource.substring(inlineTextToken.raw.length);
          if (inlineTextToken.raw.slice(-1) !== "_") {
            prevChar = inlineTextToken.raw.slice(-1);
          }
          keepPrevChar = true;
          var lastToken = arrayAt(tokens, -1);
          if (lastToken && lastToken.type === "text" && "text" in lastToken) {
            lastToken.raw += inlineTextToken.raw;
            lastToken.text += inlineTextToken.text;
          } else {
            tokens.push(inlineTextToken);
          }
          continue;
        }
      }
      return tokens;
    };
    return Lexer2;
  })()
);

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/render.js
var Renderer = (
  /** @class */
  (function() {
    function Renderer3(parser, options) {
      this.rules = {
        other,
        block: block.normal,
        inline: inline.normal
      };
      this.parser = parser || void 0;
      this.options = options || getDefaults();
      this.rules = { other, block: block.normal, inline: inline.normal };
    }
    Renderer3.prototype.renderSpace = function(token) {
      return "";
    };
    Renderer3.prototype.renderHeading = function(_a) {
      var tokens = _a.tokens, depth = _a.depth;
      return "<h" + depth + ">" + this.parser.parseInline(tokens) + "</h" + depth + ">\n";
    };
    Renderer3.prototype.renderParagraph = function(_a) {
      var tokens = _a.tokens;
      return "<p>" + this.parser.parseInline(tokens) + "</p>\n";
    };
    Renderer3.prototype.renderText = function(token) {
      return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
    };
    Renderer3.prototype.renderStrong = function(_a) {
      var tokens = _a.tokens;
      return "<strong>" + this.parser.parseInline(tokens) + "</strong>";
    };
    Renderer3.prototype.renderEm = function(_a) {
      var tokens = _a.tokens;
      return "<em>" + this.parser.parseInline(tokens) + "</em>";
    };
    Renderer3.prototype.renderStrikethrough = function(_a) {
      var tokens = _a.tokens;
      return "<del>" + this.parser.parseInline(tokens) + "</del>";
    };
    Renderer3.prototype.renderHorizontalRule = function(token) {
      return "<hr>\n";
    };
    Renderer3.prototype.renderHardBreak = function(token) {
      return "<br>";
    };
    Renderer3.prototype.renderCodeBlock = function(_a) {
      var text = _a.text, lang = _a.lang, escaped = _a.escaped;
      var langString = (lang || "").match(other.notSpaceStart) ? (lang || "").match(other.notSpaceStart)[0] : void 0;
      var code = text.replace(other.endingNewline, "") + "\n";
      if (!langString) {
        return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    };
    Renderer3.prototype.renderCodeSpan = function(_a) {
      var text = _a.text;
      return "<code>" + escape2(text, true) + "</code>";
    };
    Renderer3.prototype.renderBlockquote = function(_a) {
      var tokens = _a.tokens;
      var body = this.parser.parseBlocks(tokens);
      return "<blockquote>\n" + body + "</blockquote>\n";
    };
    Renderer3.prototype.renderLink = function(_a) {
      var href = _a.href, title = _a.title, tokens = _a.tokens;
      var text = this.parser.parseInline(tokens);
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + escape2(title) + '"';
      }
      out += ">" + text + "</a>";
      return out;
    };
    Renderer3.prototype.renderImage = function(_a) {
      var href = _a.href, title = _a.title, text = _a.text, tokens = _a.tokens;
      if (tokens) {
        text = this.parser.parseInline(tokens);
      }
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return escape2(text);
      }
      href = cleanHref;
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + escape2(title) + '"';
      }
      out += ">";
      return out;
    };
    Renderer3.prototype.renderList = function(token) {
      var ordered = token.ordered;
      var start = token.start;
      var body = "";
      for (var j = 0; j < token.items.length; j++) {
        var item = token.items[j];
        body += this.renderListItem(item);
      }
      var type = ordered ? "ol" : "ul";
      var startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
      return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
    };
    Renderer3.prototype.renderListItem = function(item) {
      var itemBody = "";
      if (item.task) {
        var checkbox = this.renderCheckbox({ checked: !!item.checked });
        if (item.loose) {
          if (item.tokens[0] && item.tokens[0].type === "paragraph") {
            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
              item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
              item.tokens[0].tokens[0].escaped = true;
            }
          } else {
            item.tokens.unshift({
              type: "text",
              raw: checkbox + " ",
              text: checkbox + " ",
              escaped: true
            });
          }
        } else {
          itemBody += checkbox + " ";
        }
      }
      itemBody += this.parser.parseBlocks(item.tokens, !!item.loose);
      return "<li>" + itemBody + "</li>\n";
    };
    Renderer3.prototype.renderCheckbox = function(_a) {
      var checked = _a.checked;
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    };
    Renderer3.prototype.renderHtml = function(_a) {
      var text = _a.text;
      return text;
    };
    Renderer3.prototype.renderTable = function(token) {
      var header = "";
      var cell = "";
      for (var j = 0; j < token.header.length; j++) {
        cell += this.renderTableCell(token.header[j]);
      }
      header += this.renderTableRow({ text: cell });
      var body = "";
      for (var j = 0; j < token.rows.length; j++) {
        var row = token.rows[j];
        cell = "";
        for (var k = 0; k < row.length; k++) {
          cell += this.renderTableCell(row[k]);
        }
        body += this.renderTableRow({ text: cell });
      }
      if (body) {
        body = "<tbody>" + body + "</tbody>";
      }
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    };
    Renderer3.prototype.renderTableRow = function(_a) {
      var text = _a.text;
      return "<tr>\n" + text + "</tr>\n";
    };
    Renderer3.prototype.renderTableCell = function(token) {
      var content = this.parser.parseInline(token.tokens);
      var type = token.header ? "th" : "td";
      var tag2 = token.align ? "<" + type + ' align="' + token.align + '">' : "<" + type + ">";
      return tag2 + content + ("</" + type + ">\n");
    };
    return Renderer3;
  })()
);

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/parser.js
var Parser = (
  /** @class */
  (function() {
    function Parser2(options, renderer) {
      this.renderer = renderer || new Renderer();
      this.options = options || getDefaults();
      this.renderer.options = this.options;
      this.renderer.parser = this;
    }
    Parser2.parse = function(tokens, options) {
      var parser = new Parser2(options);
      return parser.parseBlocks(tokens);
    };
    Parser2.prototype.parseBlocks = function(tokens, top) {
      if (top === void 0) {
        top = true;
      }
      var out = "";
      for (var i = 0; i < tokens.length; i++) {
        var anyToken = tokens[i];
        var token = anyToken;
        switch (token.type) {
          case "space": {
            out += this.renderer.renderSpace(token);
            continue;
          }
          case "heading": {
            out += this.renderer.renderHeading(token);
            continue;
          }
          case "paragraph": {
            out += this.renderer.renderParagraph(token);
            continue;
          }
          case "hr": {
            out += this.renderer.renderHorizontalRule(token);
            continue;
          }
          case "code": {
            out += this.renderer.renderCodeBlock(token);
            continue;
          }
          case "blockquote": {
            out += this.renderer.renderBlockquote(token);
            continue;
          }
          case "list": {
            out += this.renderer.renderList(token);
            continue;
          }
          case "html": {
            out += this.renderer.renderHtml(token);
            continue;
          }
          case "table": {
            out += this.renderer.renderTable(token);
            continue;
          }
          case "text": {
            var textToken = token;
            var body = this.renderer.renderText(textToken);
            while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
              textToken = tokens[++i];
              body += "\n" + this.renderer.renderText(textToken);
            }
            if (top) {
              out += this.renderer.renderParagraph({
                type: "paragraph",
                raw: body,
                text: body,
                tokens: [{ type: "text", raw: body, text: body, escaped: true }]
              });
            } else {
              out += body;
            }
            continue;
          }
        }
      }
      return out;
    };
    Parser2.prototype.parseInline = function(tokens, renderer) {
      if (renderer === void 0) {
        renderer = this.renderer;
      }
      var out = "";
      for (var i = 0; i < tokens.length; i++) {
        var anyToken = tokens[i];
        var token = anyToken;
        switch (token.type) {
          case "escape": {
            out += renderer.renderText(token);
            break;
          }
          case "text": {
            out += renderer.renderText(token);
            break;
          }
          case "strong": {
            out += renderer.renderStrong(token);
            break;
          }
          case "em": {
            out += renderer.renderEm(token);
            break;
          }
          case "del": {
            out += renderer.renderStrikethrough(token);
            break;
          }
          case "br": {
            out += renderer.renderHardBreak(token);
            break;
          }
          case "codespan": {
            out += renderer.renderCodeSpan(token);
            break;
          }
          case "link": {
            out += this.renderer.renderLink(token);
            break;
          }
          case "image": {
            out += this.renderer.renderImage(token);
            break;
          }
          case "html": {
            out += renderer.renderHtml(token);
            break;
          }
        }
      }
      return out;
    };
    return Parser2;
  })()
);

// node_modules/@syncfusion/ej2-markdown-converter/src/markdown-converter/markdown-converter.js
var MarkdownConverterPlugin = (
  /** @class */
  (function() {
    function MarkdownConverterPlugin2(options) {
      this.defaults = getDefaults();
      this.lexerInstance = new Lexer(this.defaults);
      this.rendererInst = new Renderer();
      this.options = this.setOptions(options);
    }
    MarkdownConverterPlugin2.prototype.parseMarkdown = function(src, options) {
      var origOpt = Object.assign({}, options);
      var opt = Object.assign({}, this.defaults, this.options, origOpt);
      var throwError = this.onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      var lexer = Lexer.lex;
      var parser = Parser.parse;
      if (opt.async) {
        return Promise.resolve(src).then(function(preSrc) {
          return lexer(preSrc, opt);
        }).then(function(tokens2) {
          return parser(tokens2, opt);
        }).catch(throwError);
      }
      try {
        var tokens = lexer(src, opt);
        var html2 = parser(tokens, opt);
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
    MarkdownConverterPlugin2.prototype.convertMarkdownToHtml = function(markdownContent) {
      var html2 = this.parseMarkdown(markdownContent, this.options);
      return html2;
    };
    MarkdownConverterPlugin2.prototype.setOptions = function(incomingOptions) {
      var previousOptions = this.defaults;
      var mergedOptions = Object.assign({}, previousOptions, incomingOptions);
      this.defaults = mergedOptions;
      this.rebindPipeline();
      return this.defaults;
    };
    MarkdownConverterPlugin2.prototype.onError = function(silent, async) {
      return function(e) {
        if (silent) {
          var msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
          if (async) {
            return Promise.resolve(msg);
          }
          return msg;
        }
        if (async) {
          return Promise.reject(e);
        }
        throw e;
      };
    };
    MarkdownConverterPlugin2.prototype.rebindPipeline = function() {
      var activeOptions = this.options;
      this.rendererInst = new Renderer();
      this.parserInstance = new Parser(activeOptions, this.rendererInst);
      this.lexerInstance = new Lexer(activeOptions);
    };
    MarkdownConverterPlugin2.prototype.destroy = function() {
      this.lexerInstance = void 0;
      this.rendererInst = void 0;
      this.parserInstance = void 0;
    };
    return MarkdownConverterPlugin2;
  })()
);
var MarkdownConverter;
(function(MarkdownConverter2) {
  function toHtml(markdownContent, options) {
    var converter = new MarkdownConverterPlugin(options);
    var htmlContent = converter.convertMarkdownToHtml(markdownContent);
    converter.destroy();
    return htmlContent;
  }
  MarkdownConverter2.toHtml = toHtml;
})(MarkdownConverter || (MarkdownConverter = {}));

// node_modules/@syncfusion/ej2-interactive-chat/src/ai-assist-base/ai-assist-base.js
var __extends2 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ToolbarPosition;
(function(ToolbarPosition2) {
  ToolbarPosition2["Inline"] = "Inline";
  ToolbarPosition2["Bottom"] = "Bottom";
})(ToolbarPosition || (ToolbarPosition = {}));
var AIAssistBase = (
  /** @class */
  (function(_super) {
    __extends2(AIAssistBase2, _super);
    function AIAssistBase2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AIAssistBase2.prototype.preRender = function() {
    };
    AIAssistBase2.prototype.getModuleName = function() {
      return "aiAssistBase";
    };
    AIAssistBase2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    AIAssistBase2.prototype.render = function() {
    };
    AIAssistBase2.prototype.onFooterIconsFocusOut = function(e) {
      var wrapper = e.currentTarget;
      var editable = this.editableTextarea;
      var next = e.relatedTarget;
      if (!editable) {
        return;
      }
      if (!next || !wrapper.contains(next)) {
        editable.blur();
      }
    };
    AIAssistBase2.prototype.onFooterIconsPointerDown = function(e) {
      var _this = this;
      var editable = this.editableTextarea;
      var target = e.target;
      if (!editable) {
        return;
      }
      var selectors = "";
      if (this.getModuleName() === "aiassistview") {
        selectors = '.e-tbar-btn, .e-assist-send, .e-assist-attachment-icon, .e-assist-clear-icon, button, [role="button"], input, [contenteditable="false"]';
      } else {
        selectors = '.e-tbar-btn, .e-send, button, [role="button"], input';
      }
      if (target.closest(selectors)) {
        return;
      }
      requestAnimationFrame(function() {
        editable.focus();
        _this.setFocusAtEnd(editable);
      });
    };
    AIAssistBase2.prototype.onFooterIconsClick = function(e) {
      var _this = this;
      var editable = this.editableTextarea;
      var target = e.target;
      if (!editable) {
        return;
      }
      var selectors = "";
      if (this.getModuleName() === "aiassistview") {
        selectors = '.e-tbar-btn, .e-assist-send, .e-assist-attachment-icon, .e-assist-clear-icon, button, [role="button"], input, [contenteditable="false"]';
      } else {
        selectors = '.e-tbar-btn, .e-send, .e-stop-rectangle, button, [role="button"], input';
      }
      if (target.closest(selectors)) {
        return;
      }
      if (document.activeElement !== editable) {
        requestAnimationFrame(function() {
          editable.focus();
          _this.setFocusAtEnd(editable);
        });
      }
    };
    AIAssistBase2.prototype.updateFooterType = function(toolbarPosition) {
      if (toolbarPosition.toLocaleLowerCase() === "bottom") {
        this.footer.classList.remove("e-toolbar-inline");
        this.footer.classList.add("e-toolbar-bottom");
      } else {
        this.footer.classList.remove("e-toolbar-bottom");
        this.footer.classList.add("e-toolbar-inline");
      }
    };
    AIAssistBase2.prototype.updateFooterClass = function(footerTemplate) {
      var footerClass = "e-footer " + (footerTemplate ? "e-footer-template" : "");
      this.footer.className = footerClass;
    };
    AIAssistBase2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    __decorate3([
      Property(false)
    ], AIAssistBase2.prototype, "enableStreaming", void 0);
    AIAssistBase2 = __decorate3([
      NotifyPropertyChanges
    ], AIAssistBase2);
    return AIAssistBase2;
  })(InterActiveChatBase)
);

// node_modules/@syncfusion/ej2-interactive-chat/src/ai-assistview/ai-assistview.js
var __extends3 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ASSISTHEADER = "e-aiassist-header-text e-assist-view-header";
var Prompt = (
  /** @class */
  (function(_super) {
    __extends3(Prompt2, _super);
    function Prompt2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property(null)
    ], Prompt2.prototype, "prompt", void 0);
    __decorate4([
      Property("")
    ], Prompt2.prototype, "response", void 0);
    __decorate4([
      Property(null)
    ], Prompt2.prototype, "isResponseHelpful", void 0);
    __decorate4([
      Property(null)
    ], Prompt2.prototype, "attachedFiles", void 0);
    return Prompt2;
  })(ChildProperty)
);
var AssistViewType;
(function(AssistViewType2) {
  AssistViewType2["Assist"] = "Assist";
  AssistViewType2["Custom"] = "Custom";
})(AssistViewType || (AssistViewType = {}));
var AssistView = (
  /** @class */
  (function(_super) {
    __extends3(AssistView2, _super);
    function AssistView2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property("Assist")
    ], AssistView2.prototype, "type", void 0);
    __decorate4([
      Property("")
    ], AssistView2.prototype, "name", void 0);
    __decorate4([
      Property()
    ], AssistView2.prototype, "iconCss", void 0);
    __decorate4([
      Property()
    ], AssistView2.prototype, "viewTemplate", void 0);
    return AssistView2;
  })(ChildProperty)
);
var SpeechToTextSettings = (
  /** @class */
  (function(_super) {
    __extends3(SpeechToTextSettings2, _super);
    function SpeechToTextSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property(false)
    ], SpeechToTextSettings2.prototype, "enable", void 0);
    __decorate4([
      Property(true)
    ], SpeechToTextSettings2.prototype, "allowInterimResults", void 0);
    __decorate4([
      Property("en-US")
    ], SpeechToTextSettings2.prototype, "lang", void 0);
    __decorate4([
      Property(false)
    ], SpeechToTextSettings2.prototype, "disabled", void 0);
    __decorate4([
      Complex({}, ButtonSettings)
    ], SpeechToTextSettings2.prototype, "buttonSettings", void 0);
    __decorate4([
      Property(true)
    ], SpeechToTextSettings2.prototype, "showTooltip", void 0);
    __decorate4([
      Complex({}, TooltipSettings)
    ], SpeechToTextSettings2.prototype, "tooltipSettings", void 0);
    __decorate4([
      Property("")
    ], SpeechToTextSettings2.prototype, "cssClass", void 0);
    __decorate4([
      Property("")
    ], SpeechToTextSettings2.prototype, "transcript", void 0);
    __decorate4([
      Property("Inactive")
    ], SpeechToTextSettings2.prototype, "listeningState", void 0);
    __decorate4([
      Event()
    ], SpeechToTextSettings2.prototype, "onStart", void 0);
    __decorate4([
      Event()
    ], SpeechToTextSettings2.prototype, "onStop", void 0);
    __decorate4([
      Event()
    ], SpeechToTextSettings2.prototype, "transcriptChanged", void 0);
    __decorate4([
      Event()
    ], SpeechToTextSettings2.prototype, "onError", void 0);
    return SpeechToTextSettings2;
  })(ChildProperty)
);
var AttachmentSettings = (
  /** @class */
  (function(_super) {
    __extends3(AttachmentSettings2, _super);
    function AttachmentSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property("")
    ], AttachmentSettings2.prototype, "saveUrl", void 0);
    __decorate4([
      Property("")
    ], AttachmentSettings2.prototype, "removeUrl", void 0);
    __decorate4([
      Property("")
    ], AttachmentSettings2.prototype, "allowedFileTypes", void 0);
    __decorate4([
      Property(2e6)
    ], AttachmentSettings2.prototype, "maxFileSize", void 0);
    __decorate4([
      Property(10)
    ], AttachmentSettings2.prototype, "maximumCount", void 0);
    __decorate4([
      Event()
    ], AttachmentSettings2.prototype, "attachmentClick", void 0);
    return AttachmentSettings2;
  })(ChildProperty)
);
var PromptToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends3(PromptToolbarSettings2, _super);
    function PromptToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property("100%")
    ], PromptToolbarSettings2.prototype, "width", void 0);
    __decorate4([
      Collection([], ToolbarItem)
    ], PromptToolbarSettings2.prototype, "items", void 0);
    __decorate4([
      Event()
    ], PromptToolbarSettings2.prototype, "itemClicked", void 0);
    return PromptToolbarSettings2;
  })(ChildProperty)
);
var ResponseToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends3(ResponseToolbarSettings2, _super);
    function ResponseToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property("100%")
    ], ResponseToolbarSettings2.prototype, "width", void 0);
    __decorate4([
      Collection([], ToolbarItem)
    ], ResponseToolbarSettings2.prototype, "items", void 0);
    __decorate4([
      Event()
    ], ResponseToolbarSettings2.prototype, "itemClicked", void 0);
    return ResponseToolbarSettings2;
  })(ChildProperty)
);
var FooterToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends3(FooterToolbarSettings2, _super);
    function FooterToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property("Inline")
    ], FooterToolbarSettings2.prototype, "toolbarPosition", void 0);
    __decorate4([
      Collection([], ToolbarItem)
    ], FooterToolbarSettings2.prototype, "items", void 0);
    __decorate4([
      Event()
    ], FooterToolbarSettings2.prototype, "itemClick", void 0);
    return FooterToolbarSettings2;
  })(ChildProperty)
);
var AIAssistView = (
  /** @class */
  (function(_super) {
    __extends3(AIAssistView2, _super);
    function AIAssistView2(options, element) {
      var _this = _super.call(this, options, element) || this;
      _this.toolbarItems = [];
      _this.displayContents = [];
      _this.preTagElements = [];
      _this.uploadedFiles = [];
      _this.sendToolbarItem = null;
      _this.clearToolbarItem = null;
      _this.attachmentToolbarItem = null;
      _this.speechToTextToolbarItem = null;
      _this.latestResponseMinHeight = null;
      return _this;
    }
    AIAssistView2.prototype.setupViewportFilling = function() {
      if (!this.contentWrapper || this.prompts.length === 0) {
        return;
      }
      var lastIndex = this.prompts.length - 1;
      var allResponseItems = Array.from(this.contentWrapper.querySelectorAll('.e-output-container[id^="e-response-item_"]'));
      for (var i = 0; i < allResponseItems.length; i++) {
        var index = parseInt(allResponseItems[i].id.split("_")[1], 10);
        if (index < lastIndex) {
          allResponseItems[i].style.minHeight = "auto";
          var footerEle = allResponseItems[i].querySelector(".e-content-footer");
          if (footerEle) {
            footerEle.classList.remove("e-assist-toolbar-active");
          }
        }
      }
      var contentWrapperHeight = this.contentWrapper.clientHeight;
      var promptEle = this.contentWrapper.querySelector("#e-prompt-item_" + lastIndex);
      var promptHeight = promptEle ? promptEle.offsetHeight : 0;
      var promptFilesEle = promptEle ? promptEle.querySelector(".e-prompt-uploaded-files") : null;
      var promptFilesHeight = promptFilesEle ? promptFilesEle.offsetHeight : 0;
      var promptToolbarEle = promptEle ? promptEle.querySelector(".e-prompt-toolbar") : null;
      var promptToolbarHeight = promptToolbarEle ? promptToolbarEle.offsetHeight : 0;
      var lastResponseEle = this.contentWrapper.querySelector("#e-response-item_" + lastIndex);
      var responseToolbarEle = lastResponseEle ? lastResponseEle.querySelector(".e-response-toolbar") : null;
      var responseToolbarHeight = responseToolbarEle ? responseToolbarEle.offsetHeight : 0;
      var suggestionsHeight = this.suggestionsElement && !this.suggestionsElement.hidden ? this.suggestionsElement.offsetHeight : 0;
      var scrollToBottomBtnHeight = 0;
      if (this.downArrowIcon.element) {
        scrollToBottomBtnHeight = this.downArrowIcon.element.offsetHeight;
      }
      var dynamicMinHeight = Math.max(160, contentWrapperHeight - promptHeight - promptFilesHeight - promptToolbarHeight - responseToolbarHeight - suggestionsHeight - scrollToBottomBtnHeight);
      this.latestResponseMinHeight = dynamicMinHeight;
      if (lastResponseEle) {
        lastResponseEle.style.minHeight = dynamicMinHeight + "px";
      } else if (this.skeletonContainer) {
        this.skeletonContainer.style.minHeight = dynamicMinHeight + "px";
      }
    };
    AIAssistView2.prototype.renderContentElement = function() {
      if (this.enableScrollToBottom) {
        var scrollDownButton = this.createElement("button", { id: this.element.id + "-scrollDownButton", className: "e-scroll-down-btn" });
        this.downArrowIcon = new Fab({
          iconCss: "e-icons e-assist-scroll-down",
          position: "BottomRight",
          target: this.outputElement.parentElement,
          isPrimary: false,
          visible: false
        });
        this.downArrowIcon.appendTo(scrollDownButton);
      }
    };
    AIAssistView2.prototype.handleScroll = function() {
      var atBottom = this.checkScrollAtBottom(this.contentWrapper, 50);
      this.toggleScrollIcon(atBottom);
    };
    AIAssistView2.prototype.toggleScrollIcon = function(atBottom) {
      if (this.isResponseRequested || !this.enableScrollToBottom || !this.downArrowIcon) {
        return;
      }
      this.downArrowIcon.visible = !atBottom;
      this.downArrowIcon.dataBind();
    };
    AIAssistView2.prototype.scrollBtnClick = function() {
      if (this.enableScrollToBottom) {
        this.scrollToBottom();
      }
    };
    AIAssistView2.prototype.preRender = function() {
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
    };
    AIAssistView2.prototype.getDirective = function() {
      return "EJS-AIASSISTVIEW";
    };
    AIAssistView2.prototype.getModuleName = function() {
      return "aiassistview";
    };
    AIAssistView2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    AIAssistView2.prototype.render = function() {
      this.initializeLocale();
      this.renderPromptView();
    };
    AIAssistView2.prototype.renderPromptView = function() {
      this.setDimension(this.element, this.width, this.height);
      this.renderViews();
      this.renderToolbar();
      this.updateFooterElementClass();
      this.wireEvents();
    };
    AIAssistView2.prototype.renderToolbar = function() {
      this.updateHeaderToolbar();
      if (this.assistViewTemplateIndex < 0) {
        this.displayContents.unshift(this.contentWrapper);
      } else {
        this.displayContents.unshift(this.assistCustomSection);
      }
      this.previousElement = this.displayContents[this.activeView];
      this.renderHeaderToolbar();
      this.viewWrapper = this.element.querySelector(".e-view-content");
      this.updateActiveView();
      this.addCssClass(this.element, this.cssClass);
      this.updateHeader(this.showHeader, this.toolbarHeader, this.viewWrapper);
      this.aiAssistViewRendered = true;
      this.addRtlClass(this.element, this.enableRtl);
    };
    AIAssistView2.prototype.renderViews = function() {
      this.assistViewTemplateIndex = -1;
      this.aiAssistViewRendered = false;
      this.isAssistView = false;
      this.isOutputRenderingStop = false;
      this.isResponseRequested = false;
      this.renderViewSections(this.element, "e-view-header", "e-view-content");
      var isAssistViewAssigned = false;
      var assistView;
      var customViewTemplate;
      var customViewCount = 1;
      if (this.views.length > 0) {
        for (var index = 0; index < this.views.length; index++) {
          if (this.views[parseInt(index.toString(), 10)].type.toLocaleLowerCase() === "assist" && !isAssistViewAssigned) {
            assistView = {
              text: this.views[parseInt(index.toString(), 10)].name || "AI Assist",
              prefixIcon: this.views[parseInt(index.toString(), 10)].iconCss || "e-icons e-assistview-icon",
              cssClass: ASSISTHEADER,
              htmlAttributes: { "data-index": this.element.id + "_view_0" }
            };
            this.toolbarItems.unshift(assistView);
            if (this.views[parseInt(index.toString(), 10)].viewTemplate) {
              this.assistViewTemplateIndex = index;
            }
            isAssistViewAssigned = true;
            this.isAssistView = true;
          } else if (this.views[parseInt(index.toString(), 10)].type.toLocaleLowerCase() === "custom") {
            customViewTemplate = this.createElement("div", { className: "e-customview-content-section-" + customViewCount + " e-custom-view" });
            this.getContextObject("customViewTemplate", customViewTemplate, -1, index);
            this.displayContents.push(customViewTemplate);
            this.toolbarItems.push({
              text: this.views[parseInt(index.toString(), 10)].name || "",
              prefixIcon: this.views[parseInt(index.toString(), 10)].iconCss || "",
              cssClass: "e-aiassist-header-text e-custom-view-header",
              htmlAttributes: { "data-index": this.element.id + "_view_" + customViewCount.toString() }
            });
            customViewCount++;
          }
        }
      }
      if (this.views.length === 0 || !isAssistViewAssigned) {
        assistView = {
          text: "AI Assist",
          prefixIcon: "e-icons e-assistview-icon",
          cssClass: ASSISTHEADER,
          htmlAttributes: { "data-index": this.element.id + "_view_0" }
        };
        this.toolbarItems.unshift(assistView);
        isAssistViewAssigned = true;
      }
      if (this.assistViewTemplateIndex >= 0 && this.views[this.assistViewTemplateIndex].viewTemplate) {
        this.assistCustomSection = this.createElement("div", { attrs: { class: "e-assistview-content-section", "data-index": this.element.id + "_view_0" } });
        this.getContextObject("assistViewTemplate", this.assistCustomSection, -1, this.assistViewTemplateIndex);
      } else {
        this.renderDefaultView();
      }
    };
    AIAssistView2.prototype.renderHeaderToolbar = function() {
      var _this = this;
      this.toolbar = new Toolbar({
        items: this.toolbarItems,
        height: "100%",
        enableRtl: this.enableRtl,
        clicked: function(args) {
          var eventItemArgs = {
            type: args.item.type,
            text: args.item.text,
            iconCss: args.item.prefixIcon,
            cssClass: args.item.cssClass,
            tooltip: args.item.tooltipText,
            template: args.item.template,
            disabled: args.item.disabled,
            visible: args.item.visible,
            align: args.item.align,
            tabIndex: args.item.tabIndex
          };
          var eventArgs = {
            item: eventItemArgs,
            event: args.originalEvent,
            cancel: false
          };
          if (_this.toolbarSettings.itemClicked) {
            _this.toolbarSettings.itemClicked.call(_this, eventArgs);
          }
          if (!eventArgs.cancel) {
            if (args.item.htmlAttributes) {
              var currentIndex = parseInt(args.item.htmlAttributes["data-index"].split(_this.element.id + "_view_")[1], 10);
              if (currentIndex !== _this.activeView) {
                var prevOnChange = _this.isProtectedOnChange;
                _this.isProtectedOnChange = true;
                var previousIndex = _this.getIndex(_this.activeView);
                _this.activeView = parseInt(args.item.htmlAttributes["data-index"].split(_this.element.id + "_view_")[1], 10);
                _this.updateActiveView(previousIndex);
                _this.isProtectedOnChange = prevOnChange;
              }
            }
          }
        }
      });
      this.toolbarHeader = this.element.querySelector(".e-view-header");
      var toolbarEle = this.createElement("div");
      this.toolbar.appendTo(toolbarEle);
      this.toolbar.element.setAttribute("aria-label", "assist-view-toolbar-header");
      this.toolbarHeader.appendChild(toolbarEle);
    };
    AIAssistView2.prototype.updateHeaderToolbar = function() {
      if (this.toolbarSettings.items.length > 0) {
        var pushToolbar = this.toolbarSettings.items.map(function(item) {
          return {
            type: item.type,
            template: item.template,
            disabled: item.disabled,
            cssClass: item.cssClass,
            visible: item.visible,
            tooltipText: item.tooltip,
            prefixIcon: item.iconCss,
            text: item.text,
            align: item.align,
            tabIndex: item.tabIndex
          };
        });
        this.toolbarItems = this.toolbarItems.concat(pushToolbar);
      }
    };
    AIAssistView2.prototype.getIndex = function(currentIndex) {
      return currentIndex > this.views.length - (this.isAssistView ? 1 : 0) || currentIndex < 0 ? 0 : currentIndex;
    };
    AIAssistView2.prototype.updateActiveView = function(previousIndex) {
      var activeViewIndex = this.getIndex(this.activeView);
      if (!this.aiAssistViewRendered) {
        this.appendView(activeViewIndex);
        if (this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)]) {
          this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)].classList.add("e-active");
        }
      } else if (previousIndex !== activeViewIndex) {
        this.removePreviousView(previousIndex, activeViewIndex);
        this.appendView(activeViewIndex);
      }
      this.previousElement = this.displayContents[parseInt(activeViewIndex.toString(), 10)];
    };
    AIAssistView2.prototype.appendView = function(activeViewIndex) {
      if (activeViewIndex === 0 && this.assistViewTemplateIndex < 0) {
        this.viewWrapper.append(this.contentWrapper, this.footer);
      } else if (activeViewIndex === 0 && this.assistViewTemplateIndex >= 0) {
        this.viewWrapper.append(this.assistCustomSection);
      } else {
        this.viewWrapper.append(this.displayContents[parseInt(activeViewIndex.toString(), 10)]);
      }
    };
    AIAssistView2.prototype.removePreviousView = function(previousIndex, activeViewIndex) {
      this.viewWrapper.removeChild(this.previousElement);
      if (previousIndex === 0 && this.assistViewTemplateIndex < 0) {
        this.viewWrapper.removeChild(this.footer);
      }
      if (this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)]) {
        this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)].classList.add("e-active");
      }
      if (previousIndex >= 0 && this.toolbar.tbarEle[parseInt(previousIndex.toString(), 10)]) {
        this.toolbar.tbarEle[parseInt(previousIndex.toString(), 10)].classList.remove("e-active");
      }
    };
    AIAssistView2.prototype.renderDefaultView = function() {
      var viewWrapper = this.element.querySelector(".e-view-content");
      this.createViewComponents(viewWrapper);
      this.contentWrapper = this.element.querySelector(".e-views");
      this.contentWrapper.setAttribute("data-index", this.element.id + "_view_0");
      var contentContainer = this.element.querySelector(".e-view-container");
      this.content = this.getElement("contentContainer");
      this.getFooter();
      this.updateFooterClass(this.footerTemplate);
      this.renderContent();
      this.renderAssistViewFooter();
      this.updateBannerView(contentContainer);
      contentContainer.append(this.content);
      this.checkIsScrollable();
    };
    AIAssistView2.prototype.checkIsScrollable = function() {
      if (this.enableScrollToBottom) {
        this.downArrowIcon.visible = this.contentWrapper.scrollHeight > this.contentWrapper.clientHeight;
      }
    };
    AIAssistView2.prototype.initializeLocale = function() {
      this.l10n = new L10n("aiassistview", {
        stopResponseText: "Stop Responding",
        fileSizeFailure: "Upload failed: {0} files exceeded the maximum size",
        fileCountFailure: "Upload limit reached: Maximum {0} files allowed. Remove extra files to proceed uploading",
        send: "Send",
        attachments: "Attach File",
        clear: "Clear"
      }, this.locale);
      this.l10n.setLocale(this.locale);
    };
    AIAssistView2.prototype.toggleStopRespondingButton = function(show) {
      var sendIconClass = "e-assist-send";
      var stopIconClass = "e-assist-stop";
      var stopTooltip = this.l10n.getConstant("stopResponseText");
      if (!this.footerTemplate) {
        var currentIconClass_1 = show ? sendIconClass : stopIconClass;
        var newIconClass = show ? stopIconClass : sendIconClass;
        var currentItem = this.footerToolbarEle.items.find(function(item) {
          return item.prefixIcon === "e-icons " + currentIconClass_1;
        });
        var itemIndex = this.footerToolbarEle.items.indexOf(currentItem);
        var currentToolbarItemElement = this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1) ? this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1).closest(".e-toolbar-item") : null;
        if (itemIndex !== -1 && currentItem && currentToolbarItemElement) {
          var newItem = {
            prefixIcon: "e-icons " + newIconClass,
            align: "Right",
            tooltipText: show ? stopTooltip : void 0
          };
          this.footerToolbarEle.addItems([newItem], itemIndex);
          this.footerToolbarEle.removeItems(currentToolbarItemElement);
        }
        this.refreshTextareaUI();
      } else {
        var currentIcon = this.footer.querySelector("." + (show ? sendIconClass : stopIconClass));
        if (currentIcon) {
          currentIcon.classList.replace(show ? sendIconClass : stopIconClass, show ? stopIconClass : sendIconClass);
          if (show) {
            currentIcon.title = stopTooltip;
            EventHandler.add(currentIcon, "click", this.respondingStopper, this);
          } else {
            currentIcon.removeAttribute("title");
            EventHandler.remove(currentIcon, "click", this.respondingStopper);
          }
        }
      }
    };
    AIAssistView2.prototype.hasStopResponseButton = function() {
      if (!this.footerToolbarEle && this.footerTemplate) {
        return this.footer.querySelector(".e-assist-stop") ? true : false;
      } else if (this.footerToolbarEle) {
        return this.footerToolbarEle.element.querySelector(".e-assist-stop") ? true : false;
      }
      return false;
    };
    AIAssistView2.prototype.renderContent = function() {
      this.renderOutputContent();
      this.renderSuggestions(this.promptSuggestions, this.promptSuggestionsHeader, this.promptSuggestionItemTemplate, "promptSuggestion", "promptSuggestionItemTemplate", this.onSuggestionClick);
      this.renderContentElement();
      if (this.outputElement) {
        this.renderSkeleton();
      }
    };
    AIAssistView2.prototype.renderOutputContent = function(isMethodCall) {
      var _this = this;
      this.outputElement = this.getElement("outputElement");
      if (this.responseToolbarSettings.items.length === 0) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.responseToolbarSettings.items = [
          { iconCss: "e-icons e-assist-copy", tooltip: "Copy", cssClass: "check" },
          { iconCss: "e-icons e-assist-like", tooltip: "Like" },
          { iconCss: "e-icons e-assist-dislike", tooltip: "Dislike" }
        ];
        this.isProtectedOnChange = prevOnChange;
      }
      if (this.prompts) {
        this.prompts.forEach(function(prompt, i) {
          _this.renderOutputContainer(SanitizeHtmlHelper.sanitize(prompt.prompt), SanitizeHtmlHelper.sanitize(prompt.response), prompt.attachedFiles, i, void 0, true);
        });
      }
      if (this.suggestionsElement && this.content.contains(this.suggestionsElement)) {
        this.content.insertBefore(this.outputElement, this.suggestionsElement);
      } else {
        this.content.appendChild(this.outputElement);
      }
      if (isMethodCall) {
        this.aiAssistViewRendered = true;
      }
    };
    AIAssistView2.prototype.updateBannerView = function(contentContainer) {
      if (this.prompts.length === 0) {
        this.renderBannerView(this.bannerTemplate, contentContainer, "bannerTemplate");
      }
    };
    AIAssistView2.prototype.renderAssistViewFooter = function() {
      var textareaAndIconsWrapper = this.createElement("div", { attrs: { class: "e-textarea-icons-wrapper" } });
      if (this.footerTemplate) {
        this.updateContent(this.footerTemplate, this.footer, {}, "footerTemplate");
      } else {
        this.editableTextarea = this.createElement("div", {
          attrs: {
            class: "e-assist-textarea",
            contenteditable: "true",
            placeholder: this.promptPlaceholder,
            role: "textbox",
            "aria-multiline": "true"
          },
          innerHTML: this.prompt
        });
        var hiddenTextarea = this.createElement("textarea", {
          attrs: {
            class: "e-hidden-textarea",
            name: "userPrompt",
            value: this.prompt
          }
        });
        this.appendChildren(textareaAndIconsWrapper, this.editableTextarea, hiddenTextarea);
        this.footer.append(textareaAndIconsWrapper);
      }
      if (!this.footerTemplate) {
        var footerIconsWrapper = this.createElement("div", { attrs: { class: "e-footer-icons-wrapper" } });
        this.renderFooterToolbar(footerIconsWrapper);
        textareaAndIconsWrapper.appendChild(footerIconsWrapper);
        this.footer.appendChild(textareaAndIconsWrapper);
        this.footer.classList.add("e-footer-focus-wave-effect");
        this.refreshTextareaUI();
        this.pushToUndoStack(this.prompt);
      }
    };
    AIAssistView2.prototype.renderFooterToolbar = function(container) {
      var _this = this;
      var toolbarItems = [];
      var customItems = this.footerToolbarSettings.items || [];
      for (var _i = 0, customItems_1 = customItems; _i < customItems_1.length; _i++) {
        var customItem = customItems_1[_i];
        var isSttToolbarItem = customItem.iconCss.indexOf("e-assist-speech-to-text") !== -1;
        var mappedItem = {
          type: customItem.type,
          template: isSttToolbarItem && isNullOrUndefined(customItem.template) ? '<button class="e-assistview-speech-to-text e-tbar-btn"></button>' : customItem.template,
          disabled: customItem.disabled,
          cssClass: customItem.cssClass,
          visible: customItem.visible,
          tooltipText: customItem.tooltip,
          prefixIcon: customItem.iconCss,
          text: customItem.text,
          align: customItem.align,
          tabIndex: customItem.tabIndex
        };
        toolbarItems.push(mappedItem);
      }
      if (this.enableAttachments && !this.isDuplicatedItem("e-icons e-assist-attachment-icon", toolbarItems)) {
        this.attachmentToolbarItem = {
          prefixIcon: "e-icons e-assist-attachment-icon",
          tooltipText: this.l10n.getConstant("attachments"),
          align: "Right"
        };
        toolbarItems.push(this.attachmentToolbarItem);
      }
      if (this.speechToTextSettings.enable && !this.isDuplicatedItem("e-icons e-assist-speech-to-text", toolbarItems)) {
        this.speechToTextToolbarItem = {
          id: this.element.id + "_speechtotext",
          template: '<button class="e-assistview-speech-to-text"></button>',
          prefixIcon: "e-icons e-assist-speech-to-text",
          align: "Right"
        };
        toolbarItems.push(this.speechToTextToolbarItem);
      }
      if (this.showClearButton && !this.isDuplicatedItem("e-icons e-assist-clear-icon", toolbarItems)) {
        this.clearToolbarItem = {
          prefixIcon: "e-icons e-assist-clear-icon",
          tooltipText: this.l10n.getConstant("clear"),
          align: "Right"
        };
        toolbarItems.push(this.clearToolbarItem);
      }
      if (!this.isDuplicatedItem("e-icons e-assist-send", toolbarItems)) {
        this.sendToolbarItem = {
          prefixIcon: "e-icons e-assist-send",
          align: "Right"
        };
        toolbarItems.push(this.sendToolbarItem);
      }
      this.footerToolbarEle = new Toolbar({
        items: toolbarItems,
        enableRtl: this.enableRtl,
        width: "100%",
        clicked: function(args) {
          var eventItemArgs = {
            type: args.item.type,
            text: args.item.text,
            iconCss: args.item.prefixIcon,
            cssClass: args.item.cssClass,
            tooltip: args.item.tooltipText,
            template: args.item.template,
            disabled: args.item.disabled,
            visible: args.item.visible,
            align: args.item.align,
            tabIndex: args.item.tabIndex
          };
          var eventArgs = {
            item: eventItemArgs,
            event: args.originalEvent,
            cancel: false
          };
          if (_this.footerToolbarSettings.itemClick) {
            _this.footerToolbarSettings.itemClick.call(_this, eventArgs);
          }
          if (!eventArgs.cancel) {
            switch (args.item.prefixIcon) {
              case "e-icons e-assist-send":
                if (!_this.isResponseRequested && !args.item.disabled) {
                  _this.onSendIconClick();
                }
                break;
              case "e-icons e-assist-stop":
                _this.respondingStopper(args.originalEvent);
                break;
              case "e-icons e-assist-clear-icon":
                _this.clearIconHandler();
                break;
              case "e-icons e-assist-attachment-icon":
                if (_this.uploaderObj && _this.attachmentToolbarItem) {
                  var uploaderElement = _this.footerToolbarEle.element.querySelector(".e-assist-file-upload");
                  if (!uploaderElement) {
                    _this.updateAttachmentElement();
                    uploaderElement = _this.footerToolbarEle.element.querySelector(".e-assist-file-upload");
                  }
                  if (uploaderElement) {
                    uploaderElement.click();
                  }
                }
                break;
            }
          }
        }
      });
      var toolbarContainer = this.createElement("div");
      this.footerToolbarEle.appendTo(toolbarContainer);
      this.footerToolbarEle.element.setAttribute("aria-label", "assist-footer-toolbar");
      container.appendChild(toolbarContainer);
      this.updateAttachmentElement();
      this.renderSpeechToText();
    };
    AIAssistView2.prototype.isDuplicatedItem = function(iconCss, toolbarItems) {
      for (var _i = 0, toolbarItems_1 = toolbarItems; _i < toolbarItems_1.length; _i++) {
        var item = toolbarItems_1[_i];
        if ((item.prefixIcon || "") === iconCss) {
          switch (iconCss) {
            case "e-icons e-assist-send":
              this.sendToolbarItem = item;
              break;
            case "e-icons e-assist-clear-icon":
              this.clearToolbarItem = item;
              break;
            case "e-icons e-assist-attachment-icon":
              this.attachmentToolbarItem = item;
              break;
          }
          return true;
        }
      }
      return false;
    };
    AIAssistView2.prototype.updateAttachmentElement = function() {
      if (this.enableAttachments && this.attachmentToolbarItem) {
        this.renderAttachmentIcon();
      } else {
        if (this.uploaderObj) {
          this.uploaderObj.destroy();
          this.dropArea.innerHTML = "";
          remove(this.dropArea);
        }
      }
    };
    AIAssistView2.prototype.renderSpeechToText = function() {
      var _this = this;
      if (this.speechToTextObj) {
        this.speechToTextObj.destroy();
        this.speechToTextObj = null;
      }
      if (this.speechToTextSettings.enable) {
        this.speechToTextObj = new SpeechToText({
          allowInterimResults: this.speechToTextSettings.allowInterimResults,
          transcript: this.speechToTextSettings.transcript,
          lang: this.speechToTextSettings.lang,
          listeningState: this.speechToTextSettings.listeningState,
          disabled: this.speechToTextSettings.disabled,
          buttonSettings: this.speechToTextSettings.buttonSettings,
          showTooltip: this.speechToTextSettings.showTooltip,
          tooltipSettings: this.speechToTextSettings.tooltipSettings,
          cssClass: this.speechToTextSettings.cssClass,
          onStart: function(args) {
            if (_this.speechToTextSettings.onStart) {
              _this.speechToTextSettings.onStart.call(_this, args);
            }
          },
          onStop: function(args) {
            if (_this.speechToTextSettings.onStop) {
              _this.speechToTextSettings.onStop.call(_this, args);
            }
          },
          transcriptChanged: function(args) {
            var prevOnChange = _this.isProtectedOnChange;
            _this.isProtectedOnChange = true;
            var value = _this.prompt.length > 0 ? _this.prompt + " " : "";
            if (args.isInterimResult) {
              _this.editableTextarea.innerHTML = value + SanitizeHtmlHelper.sanitize(args.transcript);
            } else {
              var prevPrompt = _this.prompt;
              _this.prompt = value + SanitizeHtmlHelper.sanitize(args.transcript);
              _this.editableTextarea.innerHTML = _this.prompt;
              _this.speechToTextObj.transcript = "";
              _this.editableTextarea.focus();
              _this.setFocusAtEnd(_this.editableTextarea);
              _this.triggerPromptChanged(event, prevPrompt);
            }
            _this.refreshTextareaUI();
            _this.scheduleUndoPush();
            _this.redoStack = [];
            _this.speechToTextSettings.transcript = args.transcript;
            if (_this.speechToTextSettings.transcriptChanged) {
              _this.speechToTextSettings.transcriptChanged.call(_this, args);
            }
            _this.isProtectedOnChange = prevOnChange;
          },
          onError: function(args) {
            if (_this.speechToTextSettings.onError) {
              _this.speechToTextSettings.onError.call(_this, args);
            }
          }
        });
        var speechToTextButton = this.footerToolbarEle.element.querySelector(".e-assistview-speech-to-text");
        if (speechToTextButton) {
          this.speechToTextObj.appendTo(speechToTextButton);
        }
      }
    };
    AIAssistView2.prototype.renderAttachmentIcon = function() {
      var _this = this;
      this.dropArea = this.createElement("div", { attrs: { class: "e-assist-drop-area" } });
      this.footer.prepend(this.dropArea);
      var attachmentIcon = this.footerToolbarEle.element.querySelector(".e-assist-attachment-icon");
      var uploaderElement = this.createElement("input", { attrs: { class: "e-assist-file-upload", type: "file", name: "UploadFiles", id: "fileUpload" } });
      attachmentIcon.appendChild(uploaderElement);
      this.uploaderObj = new Uploader({
        asyncSettings: {
          saveUrl: this.attachmentSettings.saveUrl,
          removeUrl: this.attachmentSettings.removeUrl
        },
        maxFileSize: this.attachmentSettings.maxFileSize,
        allowedExtensions: this.attachmentSettings.allowedFileTypes,
        progress: this.onUploadProgress.bind(this),
        success: this.onUploadSuccess.bind(this),
        failure: this.onUploadFailure.bind(this),
        uploading: this.onUploadStart.bind(this),
        multiple: true,
        selected: function(args) {
          var oversized = args.filesData.filter(function(file) {
            return file.status === _this.uploaderObj.l10n.getConstant("invalidMaxFileSize") && file.statusCode === "0";
          });
          if (oversized.length) {
            _this.showFailureAlert("fileSizeFailure", oversized.length, "e-size-failure");
            uploaderElement.value = "";
          }
          var totalSelected = args.filesData.length + _this.uploadedFiles.length;
          if (totalSelected > _this.attachmentSettings.maximumCount) {
            args.cancel = true;
            _this.showFailureAlert("fileCountFailure", _this.attachmentSettings.maximumCount, "e-count-failure");
            uploaderElement.value = "";
            return;
          }
        }
      });
      this.uploaderObj.appendTo(uploaderElement);
    };
    AIAssistView2.prototype.showFailureAlert = function(localeConstantKey, fileCount, failureType) {
      var failureMessage = this.l10n.getConstant(localeConstantKey).replace("{0}", fileCount.toString());
      if (fileCount === 1) {
        failureMessage = failureMessage.replace("files", "file");
      }
      this.createFailureAlert(failureMessage, failureType);
    };
    AIAssistView2.prototype.createFailureAlert = function(failureMessage, failureType) {
      var _this = this;
      var failureAlert = this.renderFailureAlert(this.viewWrapper, failureMessage, failureType, "e-assist-circle-close", "e-assist-clear-icon");
      if (this.viewWrapper.contains(this.footer)) {
        this.viewWrapper.insertBefore(failureAlert, this.footer);
      }
      failureAlert.classList.add("e-show");
      setTimeout(function() {
        _this.handleFailureAlertRemove(_this.viewWrapper, failureAlert);
      }, 3e3);
    };
    AIAssistView2.prototype.onUploadStart = function(args) {
      this.trigger("beforeAttachmentUpload", args);
      this.uploadedFiles.push(args.fileData);
      var fileItem = this.createFileItem(args.fileData, true);
      this.dropArea.appendChild(fileItem);
    };
    AIAssistView2.prototype.onUploadProgress = function(args) {
      var uploadProgress = args.e.loaded / args.e.total * 100;
      var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
      if (progressFill) {
        progressFill.style.width = uploadProgress + "%";
      }
    };
    AIAssistView2.prototype.onUploadSuccess = function(args) {
      if (args.operation === "upload") {
        this.trigger("attachmentUploadSuccess", args);
        var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
          progressFill.style.width = "100%";
          this.cleanupFileItem(args.file.name);
        }
        var progressBar = this.footer.querySelector(".e-assist-progress-fill");
        if (!progressBar) {
          this.checkAndActivateSendIcon();
        }
      } else if (args.operation === "remove") {
        this.trigger("attachmentRemoved", args);
      }
    };
    AIAssistView2.prototype.cleanupFileItem = function(fileName) {
      var fileItem = this.footer.querySelector("#e-assist-progress-" + CSS.escape(fileName));
      if (fileItem) {
        fileItem.parentElement.remove();
      }
    };
    AIAssistView2.prototype.onUploadFailure = function(args) {
      if (args.operation === "remove") {
        this.trigger("attachmentRemoved", args);
      } else {
        this.trigger("attachmentUploadFailure", args);
        this.uploaderObj.remove(args.file);
        this.uploadedFiles = this.uploadedFiles.filter(function(file) {
          return file.name !== args.file.name;
        });
        var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
          progressFill.style.width = "100%";
          progressFill.classList.add("e-assist-upload-failed");
        }
      }
    };
    AIAssistView2.prototype.createFileItem = function(fileData, isForFooter) {
      var _this = this;
      var fileItem = this.createElement("div", { className: "e-assist-uploaded-file-item" });
      var fileIcon = this.createElement("div", { className: "e-icons e-assist-file-format-icon" });
      var fileDetails = this.createElement("div", { className: "e-assist-file-details" });
      var fileName = this.createElement("span", { className: "e-assist-file-name", innerHTML: fileData.name });
      var fileSize = this.createElement("span", { className: "e-assist-file-size", innerHTML: (fileData.size / 1024).toFixed(2) + " KB" });
      var progressBar = this.createElement("div", { className: "e-assist-progress-bar" });
      var progressFill = this.createElement("div", { id: "e-assist-progress-" + fileData.name, className: "e-assist-progress-fill" });
      progressBar.appendChild(progressFill);
      fileDetails.append(fileName, fileSize);
      fileItem.append(fileIcon, fileDetails);
      var closeButton;
      if (isForFooter) {
        closeButton = this.createElement("span", { attrs: { class: "e-icons e-assist-clear-icon", role: "button", "aria-label": "Clear file", tabindex: "-1" } });
        EventHandler.add(closeButton, "click", function() {
          return _this.handleRemoveUploadedFile(closeButton, fileData, fileItem);
        });
        fileItem.append(closeButton);
      }
      fileItem.append(progressBar);
      EventHandler.add(fileItem, "click", function(event2) {
        if (closeButton && (event2.target === closeButton || event2.target.classList.contains("e-assist-clear-icon"))) {
          return;
        }
        _this.handleAttachmentPreview(fileData);
      });
      return fileItem;
    };
    AIAssistView2.prototype.handleAttachmentPreview = function(file) {
      var eventArgs = {};
      if (this.attachmentSettings.attachmentClick) {
        this.attachmentSettings.attachmentClick.call(this, eventArgs);
      }
    };
    AIAssistView2.prototype.handleRemoveUploadedFile = function(closeButton, fileData, fileItem) {
      this.uploaderObj.remove(fileData);
      this.uploadedFiles = this.uploadedFiles.filter(function(file) {
        return file.name !== fileData.name;
      });
      EventHandler.remove(closeButton, "click", this.handleRemoveUploadedFile);
      fileItem.remove();
      this.checkAndActivateSendIcon();
    };
    AIAssistView2.prototype.applyPromptChange = function(newState, oldState, event2) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.prompt = this.editableTextarea.innerHTML = newState.content;
      this.isProtectedOnChange = prevOnChange;
      this.refreshTextareaUI();
      this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
      this.triggerPromptChanged(event2, oldState.content);
    };
    AIAssistView2.prototype.handleInput = function(event2) {
      var textareaEle = event2.target;
      var isEmpty = textareaEle.innerHTML === "<br>";
      if (isEmpty) {
        this.clearBreakTags(textareaEle);
      }
      var textContent = textareaEle.innerHTML;
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var prevPrompt = this.prompt;
      this.prompt = SanitizeHtmlHelper.sanitize(textContent);
      this.isProtectedOnChange = prevOnChange;
      this.refreshTextareaUI();
      this.editableTextarea.focus();
      this.scheduleUndoPush();
      this.redoStack = [];
      this.triggerPromptChanged(event2, prevPrompt);
    };
    AIAssistView2.prototype.triggerPromptChanged = function(event2, prevPrompt) {
      var eventArgs = {
        value: this.prompt,
        previousValue: prevPrompt,
        event: event2,
        element: event2 && event2.currentTarget || this.editableTextarea
      };
      this.trigger("promptChanged", eventArgs);
    };
    AIAssistView2.prototype.footerKeyHandler = function(e) {
      var targetElement = e.target;
      if (targetElement.classList.contains("e-tbar-btn") && targetElement.querySelector(".e-assist-attachment-icon")) {
        return;
      }
      this.keyHandler(e, "footer");
    };
    AIAssistView2.prototype.bindScroll = function() {
      if (this.contentWrapper) {
        EventHandler.add(this.contentWrapper, "scroll", this.handleScroll, this);
      }
      if (this.enableScrollToBottom && this.downArrowIcon && this.downArrowIcon.element) {
        EventHandler.add(this.downArrowIcon.element, "click", this.scrollBtnClick, this);
      }
    };
    AIAssistView2.prototype.unBindScroll = function() {
      if (this.contentWrapper) {
        EventHandler.remove(this.contentWrapper, "scroll", this.handleScroll);
      }
      if (this.enableScrollToBottom && this.downArrowIcon && this.downArrowIcon.element) {
        EventHandler.remove(this.downArrowIcon.element, "click", this.scrollBtnClick);
      }
    };
    AIAssistView2.prototype.wireEvents = function() {
      this.wireFooterEvents(this.footerTemplate);
      if (this.editableTextarea) {
        var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
        if (footerIconsWrapper) {
          EventHandler.add(footerIconsWrapper, "pointerdown", this.onFooterIconsPointerDown, this);
          EventHandler.add(footerIconsWrapper, "click", this.onFooterIconsClick, this);
          EventHandler.add(footerIconsWrapper, "focusout", this.onFooterIconsFocusOut, this);
        }
      }
      if (this.enableScrollToBottom) {
        this.bindScroll();
      }
    };
    AIAssistView2.prototype.unWireEvents = function() {
      this.unWireFooterEvents(this.footerTemplate);
      if (this.editableTextarea) {
        var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
        if (footerIconsWrapper) {
          EventHandler.remove(footerIconsWrapper, "pointerdown", this.onFooterIconsPointerDown);
          EventHandler.remove(footerIconsWrapper, "click", this.onFooterIconsClick);
          EventHandler.remove(footerIconsWrapper, "focusout", this.onFooterIconsFocusOut);
        }
      }
      this.detachCodeCopyEventHandler();
      this.unBindScroll();
    };
    AIAssistView2.prototype.onFocusEditableTextarea = function() {
      if (this.footer) {
        this.footer.classList.add("e-footer-focused");
      }
      this.toggleClearIcon();
    };
    AIAssistView2.prototype.onBlurEditableTextarea = function(e) {
      var relatedTargetEle = e.relatedTarget;
      if (relatedTargetEle && relatedTargetEle.closest(".e-toolbar")) {
        return;
      }
      if (!relatedTargetEle) {
        if (this.footer) {
          this.footer.classList.remove("e-footer-focused");
        }
        if (this.clearToolbarItem) {
          this.toggleClearIcon();
        }
      } else {
        if (this.clearToolbarItem) {
          if (relatedTargetEle && !relatedTargetEle.querySelector(".e-assist-clear-icon")) {
            this.toggleClearIcon();
          }
        }
        if (this.footer) {
          this.footer.classList.remove("e-footer-focused");
        }
      }
    };
    AIAssistView2.prototype.detachCodeCopyEventHandler = function() {
      this.preTagElements.forEach(function(_a) {
        var preTag = _a.preTag, handler = _a.handler;
        var copyIcon = preTag.querySelector(".e-code-copy");
        EventHandler.remove(copyIcon, "click", handler);
      });
      this.preTagElements = [];
    };
    AIAssistView2.prototype.keyHandler = function(event2, value) {
      if (event2.key === "Enter" && !event2.shiftKey) {
        switch (value) {
          case "footer":
            this.pushToUndoStack(this.editableTextarea.innerText);
            event2.preventDefault();
            if (!this.isResponseRequested) {
              this.onSendIconClick();
            } else if (this.isResponseRequested && this.hasStopResponseButton()) {
              this.respondingStopper(event2);
            }
            break;
        }
      } else if (event2.key === "Backspace" || event2.key === "Delete") {
        if (this.speechToTextObj) {
          this.speechToTextObj.transcript = "";
        }
      } else {
        this.handleUndoRedo(event2);
      }
    };
    AIAssistView2.prototype.clearIconHandler = function() {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.editableTextarea.innerText = this.prompt = "";
      if (this.speechToTextObj) {
        this.speechToTextObj.transcript = "";
      }
      this.isProtectedOnChange = prevOnChange;
      this.refreshTextareaUI();
      this.editableTextarea.focus();
      this.pushToUndoStack(this.prompt);
      this.checkAndActivateSendIcon();
    };
    AIAssistView2.prototype.respondingStopper = function(event2) {
      this.isOutputRenderingStop = true;
      this.isResponseRequested = false;
      this.lastStreamPrompt = "";
      if (this.outputElement.hasChildNodes) {
        var skeletonElement = this.element.querySelector(".e-loading-body");
        if (skeletonElement) {
          this.outputElement.removeChild(this.skeletonContainer);
        }
      }
      this.toggleStopRespondingButton(false);
      var promptIndex = this.prompts ? this.prompts.length - 1 : -1;
      var eventArgs = {
        event: event2,
        prompt: promptIndex >= 0 ? this.prompts[parseInt(promptIndex.toString(), 10)].prompt : "",
        dataIndex: this.prompts ? this.prompts.length - 1 : -1
      };
      this.trigger("stopRespondingClick", eventArgs);
      var outputContainer = this.element.querySelector("#e-response-item_" + promptIndex);
      if (outputContainer) {
        var outputContentBodyEle = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1)).querySelector(".e-content-body");
        if (outputContentBodyEle) {
          this.renderPreTag(outputContentBodyEle);
        }
      }
    };
    AIAssistView2.prototype.onSuggestionClick = function(e, suggestion) {
      this.suggestionsElement.hidden = true;
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.prompt = !isNullOrUndefined(suggestion) ? suggestion : e.target.innerText;
      this.isProtectedOnChange = prevOnChange;
      this.onSendIconClick();
    };
    AIAssistView2.prototype.onSendIconClick = function() {
      if (this.isResponseRequested || !(this.prompt.trim() || this.uploadedFiles.length)) {
        return;
      }
      if (!isNullOrUndefined(this.speechToTextObj)) {
        this.speechToTextObj.stopListening();
      }
      this.isResponseRequested = true;
      this.lastStreamPrompt = "";
      if (this.suggestionsElement) {
        this.suggestionsElement.hidden = true;
      }
      this.isOutputRenderingStop = false;
      this.toggleStopRespondingButton(true);
      this.addPrompt();
      if (this.prompts.length === 1) {
        this.updateBannerTemplate("");
      }
      this.createOutputElement();
      var eventArgs = {
        cancel: false,
        responseToolbarItems: this.responseToolbarSettings.items,
        prompt: this.prompt,
        promptSuggestions: this.promptSuggestions,
        attachedFiles: this.uploadedFiles.slice()
      };
      this.clearUploadedFiles();
      if (!this.footerTemplate) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = this.editableTextarea.innerText = "";
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.pushToUndoStack(this.prompt);
      }
      this.setupViewportFilling();
      this.trigger("promptRequest", eventArgs);
      if (this.contentWrapper) {
        this.scrollToBottom();
      }
    };
    AIAssistView2.prototype.clearUploadedFiles = function() {
      this.uploadedFiles = [];
      if (this.dropArea) {
        this.dropArea.innerHTML = "";
      }
    };
    AIAssistView2.prototype.addPrompt = function() {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.prompts = this.prompts.concat([{ prompt: this.prompt, response: "", isResponseHelpful: null, attachedFiles: this.uploadedFiles }]);
      this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView2.prototype.getContextObject = function(templateName, contentElement, index, arrayPosition) {
      var template;
      var context = {};
      var contextIndex = index >= 0 ? index : -1;
      var contextPrompt = index >= 0 ? this.prompts[parseInt(contextIndex.toString(), 10)].prompt : "";
      var contextOutput = index >= 0 ? this.prompts[parseInt(contextIndex.toString(), 10)].response : "";
      switch (templateName.toLowerCase()) {
        case "promptitemtemplate": {
          template = this.promptItemTemplate;
          context = {
            prompt: contextPrompt,
            toolbarItems: this.promptToolbarSettings.items,
            index: contextIndex,
            attachedFiles: this.uploadedFiles
          };
          break;
        }
        case "responseitemtemplate": {
          template = this.responseItemTemplate;
          context = {
            prompt: contextPrompt,
            response: contextOutput,
            index: contextIndex,
            toolbarItems: this.responseToolbarSettings.items
          };
          break;
        }
        case "customviewtemplate":
        case "assistviewtemplate": {
          template = this.views[parseInt(arrayPosition.toString(), 10)].viewTemplate || "";
          break;
        }
      }
      this.updateContent(template, contentElement, context, templateName);
    };
    AIAssistView2.prototype.createOutputElement = function() {
      this.outputSuggestionEle = this.createElement("div", { attrs: { id: "e-prompt-item_" + (this.prompts.length - 1), class: "e-prompt-container " + (this.promptItemTemplate ? "e-prompt-item-template" : "") } });
      this.renderPrompt(this.prompt, this.prompts.length - 1, this.uploadedFiles);
      this.outputElement.append(this.outputSuggestionEle, this.skeletonContainer);
      this.skeletonContainer.hidden = false;
    };
    AIAssistView2.prototype.renderOutputContainer = function(promptText, outputText, attachedFiles, index, isMethodCall, isFinalUpdate) {
      var outputContainer = this.createElement("div", { attrs: __assign({ id: "e-response-item_" + index, class: "e-output-container " + (this.responseItemTemplate ? "e-response-item-template" : "") }, this.latestResponseMinHeight != null ? { style: "min-height:" + this.latestResponseMinHeight + "px" } : {}) });
      this.renderOutput(outputContainer, promptText, outputText, attachedFiles, isMethodCall, index, isFinalUpdate);
      if (promptText) {
        this.outputElement.append(this.outputSuggestionEle);
      }
      this.outputElement.append(outputContainer);
      if (this.hasStopResponseButton() && isFinalUpdate) {
        this.toggleStopRespondingButton(false);
      }
      if (!this.isOutputRenderingStop && !this.content.contains(this.suggestionsElement) && this.suggestionsElement) {
        this.content.append(this.suggestionsElement);
      }
    };
    AIAssistView2.prototype.renderOutput = function(outputContainer, promptText, outputText, attachedFiles, isMethodCall, index, isFinalUpdate) {
      var promptIcon = this.createElement("span", {
        className: "e-output-icon e-icons " + (this.responseIconCss || this.isAssistView && this.views[0].iconCss || "e-assistview-icon")
      });
      var aiOutputEle = this.createElement("div", { className: "e-output" });
      if (!this.aiAssistViewRendered || isMethodCall) {
        if (!isNullOrUndefined(promptText) || attachedFiles && attachedFiles.length > 0) {
          this.outputSuggestionEle = this.createElement("div", { attrs: { id: "e-prompt-item_" + index, class: "e-prompt-container " + (this.promptItemTemplate ? "e-prompt-item-template" : "") } });
          this.renderPrompt(promptText, index, attachedFiles);
        }
      }
      var lastPrompt = { prompt: promptText, response: outputText };
      if (lastPrompt.response) {
        if (this.responseItemTemplate) {
          this.getContextObject("responseItemTemplate", aiOutputEle, index);
          if (this.outputElement.querySelector(".e-skeleton")) {
            this.outputElement.removeChild(this.skeletonContainer);
          }
          if (this.contentFooterEle) {
            this.contentFooterEle.classList.remove("e-assist-toolbar-active");
          }
          this.renderOutputToolbarItems(index, isFinalUpdate);
          aiOutputEle.append(this.contentFooterEle);
          outputContainer.append(aiOutputEle);
        } else {
          this.renderOutputTextContainer(lastPrompt.response, aiOutputEle, index, false, isFinalUpdate);
          outputContainer.append(promptIcon, aiOutputEle);
        }
      } else if (this.aiAssistViewRendered) {
        if (this.outputElement.querySelector(".e-skeleton")) {
          this.outputElement.removeChild(this.skeletonContainer);
        }
        if (this.suggestionsElement) {
          this.suggestionsElement.hidden = false;
        }
      }
    };
    AIAssistView2.prototype.renderOutputTextContainer = function(response, aiOutputEle, index, isMethodCall, isFinalUpdate) {
      if (this.contentFooterEle) {
        this.contentFooterEle.classList.remove("e-assist-toolbar-active");
      }
      this.outputContentBodyEle = this.createElement("div", { attrs: { class: "e-content-body", tabindex: "0" } });
      if (!isMethodCall) {
        if (!this.enableStreaming || isFinalUpdate) {
          var htmlResponse = MarkdownConverter.toHtml(response);
          this.outputContentBodyEle.innerHTML = htmlResponse;
        } else {
          this.outputContentBodyEle.innerHTML = response;
        }
        if (isFinalUpdate) {
          this.renderPreTag(this.outputContentBodyEle);
        }
      }
      if (this.outputElement.querySelector(".e-skeleton")) {
        this.outputElement.removeChild(this.skeletonContainer);
      }
      this.appendChildren(aiOutputEle, this.outputContentBodyEle);
      if (isFinalUpdate) {
        this.renderOutputToolbarItems(index, isFinalUpdate);
        this.appendChildren(aiOutputEle, this.contentFooterEle);
      }
    };
    AIAssistView2.prototype.renderPreTag = function(outputContentEle) {
      var _this = this;
      var preTags = Array.from(outputContentEle.querySelectorAll("pre"));
      preTags.forEach(function(preTag) {
        var copyIcon = document.createElement("span");
        copyIcon.className = "e-icons e-code-copy e-assist-copy";
        preTag.insertBefore(copyIcon, preTag.firstChild);
        _this.preTagElements.push({ preTag, handler: _this.getCopyHandler(preTag) });
        EventHandler.add(copyIcon, "click", _this.preTagElements[_this.preTagElements.length - 1].handler);
      });
    };
    AIAssistView2.prototype.getCopyHandler = function(preTag) {
      return function() {
        var preText = preTag.innerText;
        window.navigator.clipboard.writeText(preText);
        var copyIcon = preTag.querySelector(".e-code-copy");
        copyIcon.className = "e-icons e-code-copy e-assist-check";
        setTimeout(function() {
          copyIcon.className = "e-icons e-code-copy e-assist-copy";
        }, 1e3);
      };
    };
    AIAssistView2.prototype.renderOutputToolbarItems = function(index, isFinalUpdate) {
      this.contentFooterEle = this.createElement("div", { className: "e-content-footer e-assist-toolbar-active" });
      var footerContent = this.createElement("div");
      this.renderResponseToolbar(index);
      if (this.aiAssistViewRendered) {
        if (this.outputElement.querySelector(".e-skeleton")) {
          this.outputElement.removeChild(this.skeletonContainer);
        }
        if (isFinalUpdate && this.suggestionsElement) {
          this.suggestionsElement.hidden = false;
        }
      }
      this.responseToolbarEle.appendTo(footerContent);
      this.responseToolbarEle.element.setAttribute("aria-label", "response-toolbar-" + index);
      this.contentFooterEle.appendChild(footerContent);
    };
    AIAssistView2.prototype.renderResponseToolbar = function(index) {
      var _this = this;
      var pushToolbar = this.responseToolbarSettings.items.map(function(item) {
        var toolbarItem = {
          type: item.type,
          visible: item.visible,
          disabled: item.disabled,
          tooltipText: item.tooltip,
          template: item.template,
          prefixIcon: item.iconCss,
          text: item.text,
          cssClass: item.cssClass,
          align: item.align,
          width: _this.responseToolbarSettings.width,
          tabIndex: item.tabIndex
        };
        if (toolbarItem.prefixIcon === "e-icons e-assist-like" && _this.prompts[parseInt(index.toString(), 10)].isResponseHelpful) {
          toolbarItem.prefixIcon = "e-icons e-assist-like-filled";
        } else if (toolbarItem.prefixIcon === "e-icons e-assist-dislike" && _this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === false) {
          toolbarItem.prefixIcon = "e-icons e-assist-dislike-filled";
        }
        return toolbarItem;
      });
      this.responseToolbarEle = new Toolbar({
        items: pushToolbar,
        clicked: function(args) {
          var eventItemArgs = {
            type: args.item.type,
            text: args.item.text,
            iconCss: args.item.prefixIcon,
            cssClass: args.item.cssClass,
            tooltip: args.item.tooltipText,
            template: args.item.template,
            disabled: args.item.disabled,
            visible: args.item.visible,
            align: args.item.align,
            tabIndex: args.item.tabIndex
          };
          var eventArgs = {
            item: eventItemArgs,
            event: args.originalEvent,
            cancel: false,
            dataIndex: index
          };
          if (_this.responseToolbarSettings.itemClicked) {
            _this.responseToolbarSettings.itemClicked.call(_this, eventArgs);
          }
          if (!eventArgs.cancel) {
            _this.handleItemClick(args, index);
          }
        }
      });
    };
    AIAssistView2.prototype.handleItemClick = function(args, index) {
      var _this = this;
      if (args.item.prefixIcon === "e-icons e-assist-copy") {
        this.getClipBoardContent(SanitizeHtmlHelper.sanitize(this.prompts[parseInt(index.toString(), 10)].response));
        args.item.prefixIcon = "e-icons e-assist-check";
        this.responseToolbarEle.dataBind();
        setTimeout(function() {
          args.item.prefixIcon = "e-icons e-assist-copy";
          _this.responseToolbarEle.dataBind();
        }, 1e3);
      }
      var icon = args.item.prefixIcon;
      var isLikeInteracted = icon === "e-icons e-assist-like-filled" || icon === "e-icons e-assist-like";
      var isDislikeInteracted = icon === "e-icons e-assist-dislike-filled" || icon === "e-icons e-assist-dislike";
      if (isLikeInteracted || isDislikeInteracted) {
        var isHelpful = null;
        if (isLikeInteracted) {
          isHelpful = this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === true ? null : true;
        } else if (isDislikeInteracted) {
          isHelpful = this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === false ? null : false;
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompts[parseInt(index.toString(), 10)].isResponseHelpful = isHelpful;
        var promptItem = this.prompts[parseInt(index.toString(), 10)];
        var controlParentItems = args.item.controlParent.items;
        var likeIndex = controlParentItems.findIndex(function(it) {
          return it.prefixIcon === "e-icons e-assist-like" || it.prefixIcon === "e-icons e-assist-like-filled";
        });
        var dislikeIndex = controlParentItems.findIndex(function(it) {
          return it.prefixIcon === "e-icons e-assist-dislike" || it.prefixIcon === "e-icons e-assist-dislike-filled";
        });
        if (isLikeInteracted) {
          if (promptItem.isResponseHelpful === true) {
            args.item.prefixIcon = "e-icons e-assist-like-filled";
            if (controlParentItems && controlParentItems.length > 2) {
              controlParentItems[parseInt(dislikeIndex.toString(), 10)].prefixIcon = "e-icons e-assist-dislike";
            }
          } else {
            args.item.prefixIcon = "e-icons e-assist-like";
          }
        } else if (isDislikeInteracted) {
          if (promptItem.isResponseHelpful === false) {
            args.item.prefixIcon = "e-icons e-assist-dislike-filled";
            if (controlParentItems && controlParentItems.length > 1) {
              controlParentItems[parseInt(likeIndex.toString(), 10)].prefixIcon = "e-icons e-assist-like";
            }
          } else {
            args.item.prefixIcon = "e-icons e-assist-dislike";
          }
        }
        this.responseToolbarEle.dataBind();
        this.isProtectedOnChange = prevOnChange;
      }
    };
    AIAssistView2.prototype.renderPrompt = function(promptText, promptIndex, attachedFiles) {
      var _this = this;
      var outputPrompt = this.createElement("div", { attrs: { class: "e-prompt-text", tabindex: "0" } });
      var promptFiles = this.createElement("div", { attrs: { class: "e-prompt-uploaded-files" } });
      var promptContent = this.createElement("div", { className: "e-prompt-content" });
      var promptDetails = this.createElement("div", { className: "e-prompt-details" });
      var promptToolbarContainer = this.createElement("div", { className: "e-prompt-toolbar" });
      var promptToolbar = this.createElement("div");
      var userIcon = this.createElement("span", { className: this.promptIconCss ? "e-prompt-icon e-icons " + this.promptIconCss : "" });
      if (this.promptItemTemplate) {
        this.getContextObject("promptItemTemplate", this.outputSuggestionEle, promptIndex);
      } else {
        outputPrompt.innerHTML = promptText;
        var uploadedFiles = attachedFiles || this.uploadedFiles;
        if (uploadedFiles.length > 0) {
          uploadedFiles.forEach(function(file) {
            promptFiles.appendChild(_this.createFileItem(file, false));
          });
          promptDetails.appendChild(promptFiles);
        }
        if (promptText.length > 0) {
          promptDetails.appendChild(outputPrompt);
        }
        promptContent.appendChild(promptDetails);
        if (this.promptIconCss) {
          promptContent.appendChild(userIcon);
        }
        this.outputSuggestionEle.append(promptContent);
      }
      this.renderPromptToolbar(promptToolbar, promptIndex);
      promptToolbarContainer.append(promptToolbar);
      this.appendChildren(this.outputSuggestionEle, promptToolbarContainer);
    };
    AIAssistView2.prototype.renderPromptToolbar = function(element, promptIndex) {
      var _this = this;
      var pushToolbar = [];
      if (this.promptToolbarSettings.items.length === 0) {
        pushToolbar = [
          { prefixIcon: "e-icons e-assist-edit", tooltipText: "Edit" },
          { prefixIcon: "e-icons e-assist-copy", tooltipText: "Copy" }
        ];
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.promptToolbarSettings.items = [
          { iconCss: "e-icons e-assist-edit", tooltip: "Edit" },
          { iconCss: "e-icons e-assist-copy", tooltip: "Copy" }
        ];
        this.isProtectedOnChange = prevOnChange;
      } else {
        pushToolbar = this.promptToolbarSettings.items.map(function(item) {
          return {
            type: item.type,
            template: item.template,
            disabled: item.disabled,
            cssClass: item.cssClass,
            visible: item.visible,
            tooltipText: item.tooltip,
            prefixIcon: item.iconCss,
            text: item.text,
            align: item.align,
            width: _this.promptToolbarSettings.width,
            tabIndex: item.tabIndex
          };
        });
      }
      this.promptToolbarEle = new Toolbar({
        items: pushToolbar,
        clicked: function(args) {
          var eventItemArgs = {
            type: args.item.type,
            text: args.item.text,
            iconCss: args.item.prefixIcon,
            cssClass: args.item.cssClass,
            tooltip: args.item.tooltipText,
            template: args.item.template,
            disabled: args.item.disabled,
            visible: args.item.visible,
            align: args.item.align,
            tabIndex: args.item.tabIndex
          };
          var eventArgs = {
            item: eventItemArgs,
            event: args.originalEvent,
            cancel: false,
            dataIndex: promptIndex
          };
          if (_this.promptToolbarSettings.itemClicked) {
            _this.promptToolbarSettings.itemClicked.call(_this, eventArgs);
          }
          if (!eventArgs.cancel) {
            if (args.item.prefixIcon === "e-icons e-assist-edit") {
              _this.onEditIconClick(promptIndex);
            }
            if (args.item.prefixIcon === "e-icons e-assist-copy") {
              _this.getClipBoardContent(SanitizeHtmlHelper.sanitize(_this.prompts[parseInt(promptIndex.toString(), 10)].prompt));
              args.item.prefixIcon = "e-icons e-assist-check";
              _this.promptToolbarEle.dataBind();
              setTimeout(function() {
                args.item.prefixIcon = "e-icons e-assist-copy";
                _this.promptToolbarEle.dataBind();
              }, 1e3);
            }
          }
        }
      });
      this.promptToolbarEle.appendTo(element);
      this.promptToolbarEle.element.setAttribute("aria-label", "prompt-toolbar-" + promptIndex);
    };
    AIAssistView2.prototype.renderSkeleton = function() {
      this.skeletonContainer = this.createElement("div", { className: "e-output-container" });
      var outputViewWrapper = this.createElement("div", { className: "e-output", styles: "width: 70%;" });
      var skeletonIconEle = this.createElement("span", { className: "e-output-icon e-skeleton e-skeleton-text e-shimmer-wave" });
      var skeletonBodyEle = this.createElement("div", { className: "e-loading-body" });
      var skeletonFooterEle = this.createElement("div", { className: "e-loading-footer" });
      var _a = [
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 100%; height: 15px;" }),
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 75%; height: 15px;" }),
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 50%; height: 15px;" })
      ], skeletonLine1 = _a[0], skeletonLine2 = _a[1], skeletonLine3 = _a[2];
      var footerSkeleton = [
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 100%; height: 30px;" })
      ][0];
      this.appendChildren(skeletonBodyEle, skeletonLine1, skeletonLine2, skeletonLine3);
      skeletonFooterEle.append(footerSkeleton);
      this.appendChildren(outputViewWrapper, skeletonBodyEle, skeletonFooterEle);
      this.appendChildren(this.skeletonContainer, skeletonIconEle, outputViewWrapper);
    };
    AIAssistView2.prototype.onEditIconClick = function(promptIndex) {
      if (this.editableTextarea) {
        if (this.suggestionsElement) {
          this.suggestionsElement.hidden = true;
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.editableTextarea.innerHTML = this.prompt = SanitizeHtmlHelper.sanitize(this.prompts[parseInt(promptIndex.toString(), 10)].prompt);
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.editableTextarea.focus();
        this.setFocusAtEnd(this.editableTextarea);
        this.pushToUndoStack(this.prompt);
        this.redoStack = [];
      }
    };
    AIAssistView2.prototype.refreshTextareaUI = function() {
      this.updateHiddenTextarea(this.prompt);
      this.checkAndActivateSendIcon();
      this.updateFooterElementClass();
      this.updateFooterType(this.footerToolbarSettings.toolbarPosition);
      this.toggleClearIcon();
    };
    AIAssistView2.prototype.checkAndActivateSendIcon = function() {
      if (!this.footerToolbarEle) {
        return;
      }
      var length = this.prompt.length > 0 ? this.prompt.length : this.uploadedFiles.length;
      if (this.sendToolbarItem.prefixIcon === "e-icons e-assist-send") {
        var sendItem = this.footerToolbarEle.element.querySelector(".e-assist-send");
        if (sendItem) {
          if (length > 0) {
            removeClass([sendItem], "disabled");
            sendItem.setAttribute("title", this.l10n.getConstant("send"));
          } else {
            addClass([sendItem], "disabled");
          }
        }
      }
    };
    AIAssistView2.prototype.toggleClearIcon = function() {
      if (this.clearToolbarItem && this.footerToolbarEle) {
        var isFocused = document.activeElement === this.editableTextarea;
        var hasContent = this.editableTextarea.textContent.length > 0;
        var clearItemElement = this.footerToolbarEle.element.querySelector(".e-toolbar-item .e-icons.e-assist-clear-icon").closest(".e-toolbar-item");
        if (clearItemElement) {
          if (isFocused && hasContent) {
            this.footerToolbarEle.hideItem(clearItemElement, false);
          } else {
            this.footerToolbarEle.hideItem(clearItemElement, true);
          }
        }
      }
    };
    AIAssistView2.prototype.updateIcons = function(newCss, isPromptIconCss) {
      if (isPromptIconCss === void 0) {
        isPromptIconCss = false;
      }
      var elements;
      if (this.outputElement) {
        if (isPromptIconCss) {
          newCss = "e-prompt-icon e-icons " + newCss;
          elements = this.outputElement.querySelectorAll(".e-prompt-icon");
        } else {
          newCss = " e-output-icon e-icons " + newCss;
          elements = this.outputElement.querySelectorAll(".e-output-icon");
        }
      }
      for (var index = 0; index < (elements && elements.length); index++) {
        removeClass([elements[parseInt(index.toString(), 10)]], elements[parseInt(index.toString(), 10)].classList.toString().trim().split(" "));
        addClass([elements[parseInt(index.toString(), 10)]], newCss.trim().split(" "));
      }
    };
    AIAssistView2.prototype.updateToolbarSettings = function(previousToolbar) {
      var previousToolbarIndex = 0;
      for (var index = this.views.length; index < this.toolbarItems.length; index++) {
        if (previousToolbar.items[parseInt(previousToolbarIndex.toString(), 10)] === this.toolbarItems[parseInt(index.toString(), 10)]) {
          this.toolbarItems.splice(index, 1);
        }
      }
      this.updateHeaderToolbar();
      this.toolbar.items = this.toolbarItems;
    };
    AIAssistView2.prototype.updateAttachmentToolbarItemInSettings = function() {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var items = this.footerToolbarSettings.items;
      var attachmentItemIndex = items.findIndex(function(item) {
        return item.iconCss === "e-icons e-assist-attachment-icon";
      });
      if (this.enableAttachments && attachmentItemIndex === -1) {
        var attachmentItem = {
          iconCss: "e-icons e-assist-attachment-icon",
          tooltip: this.l10n.getConstant("attachments"),
          align: "Right"
        };
        var sendItemIndex = items.findIndex(function(item) {
          return item.iconCss === "e-icons e-assist-send";
        });
        items.splice(sendItemIndex !== -1 ? sendItemIndex : items.length, 0, attachmentItem);
      } else if (!this.enableAttachments && attachmentItemIndex !== -1) {
        items.splice(attachmentItemIndex, 1);
      }
      this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView2.prototype.updateClearToolbarItemInSettings = function() {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var items = this.footerToolbarSettings.items;
      var clearItemIndex = items.findIndex(function(item) {
        return item.iconCss === "e-icons e-assist-clear-icon";
      });
      if (this.showClearButton && clearItemIndex === -1) {
        var clearItem = {
          iconCss: "e-icons e-assist-clear-icon",
          tooltip: this.l10n.getConstant("clear"),
          align: "Right"
        };
        var sendItemIndex = items.findIndex(function(item) {
          return item.iconCss === "e-icons e-assist-send";
        });
        items.splice(sendItemIndex !== -1 ? sendItemIndex : items.length, 0, clearItem);
      } else if (!this.showClearButton && clearItemIndex !== -1) {
        items.splice(clearItemIndex, 1);
      }
      this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView2.prototype.updateFooterToolbar = function() {
      var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
      if (footerIconsWrapper) {
        footerIconsWrapper.innerHTML = "";
        this.footerToolbarEle = null;
        this.sendToolbarItem = null;
        this.clearToolbarItem = null;
        this.attachmentToolbarItem = null;
        this.renderFooterToolbar(footerIconsWrapper);
        this.refreshTextareaUI();
      }
    };
    AIAssistView2.prototype.updateResponse = function(response, index, isFinalUpdate, responseItem) {
      if (!this.responseItemTemplate && responseItem) {
        var outputEle = responseItem.querySelector(".e-output");
        var outputContentBodyEle = responseItem.querySelector(".e-content-body");
        if (outputContentBodyEle) {
          outputContentBodyEle.innerHTML = response;
        }
        if (isFinalUpdate && this.suggestionsElement) {
          this.suggestionsElement.hidden = false;
        }
        if (isFinalUpdate) {
          this.renderPreTag(outputContentBodyEle);
        }
        if (isFinalUpdate && outputEle.querySelector(".e-content-footer") === null) {
          this.renderOutputToolbarItems(index, isFinalUpdate);
          this.appendChildren(outputEle, this.contentFooterEle);
        }
      } else {
        this.renderOutputContainer(void 0, response, void 0, index, false, isFinalUpdate);
      }
    };
    AIAssistView2.prototype.streamResponse = function(response, index) {
      var _this = this;
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var i = 0;
      var words = response.split(" ");
      var wordCount = words.length;
      var lastResponse = "";
      var streamingResponse = function() {
        if (_this.isOutputRenderingStop) {
          return;
        }
        if (index >= _this.prompts.length) {
          return;
        }
        var responseItem = _this.element.querySelector("#e-response-item_" + index);
        lastResponse += (i === 0 ? "" : " ") + words[parseInt(i.toString(), 10)];
        i++;
        if (_this.outputElement.querySelector(".e-skeleton")) {
          _this.outputElement.removeChild(_this.skeletonContainer);
        }
        _this.updateResponse(lastResponse, index, i === wordCount, responseItem);
        _this.scrollToBottom();
        _this.setupViewportFilling();
        if (i < wordCount) {
          setTimeout(function() {
            streamingResponse();
          }, 15);
        } else {
          var isFinalUpdate = lastResponse.length === response.length;
          if (isFinalUpdate && _this.hasStopResponseButton()) {
            _this.toggleStopRespondingButton(false);
          }
          _this.isResponseRequested = !isFinalUpdate;
        }
      };
      streamingResponse();
      this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView2.prototype.updateBannerTemplate = function(newTemplate) {
      if (!isNullOrUndefined(newTemplate)) {
        var contentContainer = this.element.querySelector(".e-view-container");
        var existingTemplate = contentContainer.querySelector(".e-banner-view");
        if (existingTemplate) {
          existingTemplate.remove();
        }
        this.updateBannerView(contentContainer);
      }
    };
    AIAssistView2.prototype.updatePromptSuggestionTemplate = function() {
      if (this.suggestionsElement) {
        this.suggestionsElement.remove();
      }
      if (!this.isOutputRenderingStop) {
        this.renderSuggestions(this.promptSuggestions, this.promptSuggestionsHeader, this.promptSuggestionItemTemplate, "promptSuggestion", "promptSuggestionItemTemplate", this.onSuggestionClick);
      }
    };
    AIAssistView2.prototype.updateFooterTemplate = function() {
      this.footer.innerHTML = "";
      this.updateFooterClass(this.footerTemplate);
      this.unWireFooterEvents(this.footerTemplate);
      this.renderAssistViewFooter();
      if (!this.footerTemplate) {
        this.wireFooterEvents(this.footerTemplate);
      }
    };
    AIAssistView2.prototype.updateAttachmentSettings = function(newAttachment) {
      if (!isNullOrUndefined(newAttachment.allowedFileTypes)) {
        this.uploaderObj.allowedExtensions = newAttachment.allowedFileTypes;
      }
      if (!isNullOrUndefined(newAttachment.maxFileSize)) {
        this.uploaderObj.maxFileSize = newAttachment.maxFileSize;
      }
      this.uploaderObj.asyncSettings = {
        saveUrl: !isNullOrUndefined(newAttachment.saveUrl) ? newAttachment.saveUrl : this.uploaderObj.asyncSettings.saveUrl,
        removeUrl: !isNullOrUndefined(newAttachment.removeUrl) ? newAttachment.removeUrl : this.uploaderObj.asyncSettings.removeUrl
      };
    };
    AIAssistView2.prototype.handleSTTDynamicChange = function(newProp, oldProp) {
      if (oldProp.enable !== newProp.enable) {
        this.updateFooterToolbar();
        this.updateSpeechToTextSettings(newProp);
      }
      if (isNullOrUndefined(this.speechToTextObj)) {
        return;
      }
      if (oldProp.allowInterimResults !== newProp.allowInterimResults) {
        this.speechToTextObj.allowInterimResults = newProp.allowInterimResults;
      }
      if (oldProp.buttonSettings !== newProp.buttonSettings) {
        this.speechToTextObj.buttonSettings = newProp.buttonSettings;
      }
      if (oldProp.tooltipSettings !== newProp.tooltipSettings) {
        this.speechToTextObj.tooltipSettings = newProp.tooltipSettings;
      }
      if (oldProp.showTooltip !== newProp.showTooltip) {
        this.speechToTextObj.showTooltip = newProp.showTooltip;
      }
      if (oldProp.cssClass !== newProp.cssClass) {
        this.speechToTextObj.cssClass = newProp.cssClass;
      }
      if (oldProp.disabled !== newProp.disabled) {
        this.speechToTextObj.disabled = newProp.disabled;
      }
      if (oldProp.lang !== newProp.lang) {
        this.speechToTextObj.lang = newProp.lang;
      }
      if (oldProp.listeningState !== newProp.listeningState) {
        this.speechToTextObj.listeningState = newProp.listeningState;
      }
      this.speechToTextObj.dataBind();
    };
    AIAssistView2.prototype.updateSpeechToTextSettings = function(newProps) {
      this.renderSpeechToText();
      if (this.speechToTextObj == null) {
        return;
      }
      this.speechToTextObj.allowInterimResults = newProps.allowInterimResults;
      this.speechToTextObj.transcript = newProps.transcript;
      if (!isNullOrUndefined(newProps.lang)) {
        this.speechToTextObj.lang = newProps.lang || "en-US";
      }
      if (!isNullOrUndefined(newProps.disabled)) {
        this.speechToTextObj.disabled = newProps.disabled;
      }
      if (!isNullOrUndefined(newProps.buttonSettings)) {
        this.speechToTextObj.buttonSettings = newProps.buttonSettings;
      }
      if (!isNullOrUndefined(newProps.showTooltip)) {
        this.speechToTextObj.showTooltip = newProps.showTooltip;
      }
      if (!isNullOrUndefined(newProps.tooltipSettings)) {
        this.speechToTextObj.tooltipSettings = newProps.tooltipSettings;
      }
      if (!isNullOrUndefined(newProps.cssClass)) {
        this.speechToTextObj.cssClass = newProps.cssClass;
      }
    };
    AIAssistView2.prototype.updateLocale = function() {
      this.l10n.setLocale(this.locale);
      var failureElement = this.viewWrapper.querySelector(".e-upload-failure-alert");
      if (failureElement) {
        var failureMessageEle = failureElement.querySelector(".e-failure-message");
        if (failureMessageEle.classList.contains("e-size-failure")) {
          failureMessageEle.textContent = this.l10n.getConstant("fileSizeFailure");
        } else {
          var failureText = this.l10n.getConstant("fileCountFailure");
          failureText = failureText.replace("{0}", this.attachmentSettings.maximumCount.toString());
          if (this.attachmentSettings.maximumCount === 1) {
            failureText = failureText.replace("files", "file");
          }
          failureMessageEle.textContent = failureText;
        }
      }
    };
    AIAssistView2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.unWireEvents();
      this.destroyAndNullify(this.responseToolbarEle);
      this.destroyAndNullify(this.promptToolbarEle);
      this.destroyAndNullify(this.footerToolbarEle);
      this.destroyAndNullify(this.downArrowIcon);
      this.destroyAndNullify(this.toolbar);
      this.destroyAndNullify(this.speechToTextObj);
      this.destroyAssistView();
      remove(this.viewWrapper);
      this.viewWrapper = null;
      this.aiAssistViewRendered = null;
      this.assistViewTemplateIndex = null;
      this.toolbarItems = [];
      this.displayContents = [];
      this.isOutputRenderingStop = null;
      this.isResponseRequested = null;
      this.suggestionHeader = null;
      this.previousElement = null;
      this.assistCustomSection = null;
      this.speechToTextToolbarItem = null;
      this.preTagElements = [];
      this.toolbarSettings = this.promptToolbarSettings = this.responseToolbarSettings = {};
      if (this.cssClass) {
        removeClass([this.element], this.cssClass.split(" "));
      }
      this.element.classList.remove("e-rtl");
    };
    AIAssistView2.prototype.destroyAssistView = function() {
      var properties = [
        "toolbarHeader",
        "sendIcon",
        "clearIcon",
        "suggestions",
        "skeletonContainer",
        "outputElement",
        "outputSuggestionEle",
        "contentFooterEle",
        "editableTextarea",
        "footer",
        "speechToTextToolbarItem",
        "assistCustomSection",
        "content",
        "stopResponding",
        "contentWrapper"
      ];
      for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        var element = prop;
        this.removeAndNullify(this[element]);
        this[element] = null;
      }
    };
    AIAssistView2.prototype.executePrompt = function(prompt) {
      if (!isNullOrUndefined(prompt) && prompt.trim().length > 0) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = prompt;
        this.isProtectedOnChange = prevOnChange;
        this.onSendIconClick();
      }
    };
    AIAssistView2.prototype.addPromptResponse = function(outputResponse, isFinalUpdate) {
      var _this = this;
      if (isFinalUpdate === void 0) {
        isFinalUpdate = true;
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      if (!this.isOutputRenderingStop) {
        var responseItem_1 = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1));
        var lastPrompt_1 = this.prompts[this.prompts.length - 1];
        var processResponse = function(rawResponse) {
          if (_this.enableStreaming) {
            isFinalUpdate = false;
            var htmlResponse = MarkdownConverter.toHtml(rawResponse);
            lastPrompt_1.response = htmlResponse;
            _this.streamResponse(lastPrompt_1.response, _this.prompts.length - 1);
          } else {
            lastPrompt_1.response = rawResponse;
            _this.updateResponse(lastPrompt_1.response, _this.prompts.length - 1, isFinalUpdate, responseItem_1);
          }
        };
        if (typeof outputResponse === "string") {
          if (!this.isResponseRequested) {
            this.prompts = this.prompts.concat([{ prompt: null, response: null, isResponseHelpful: null, attachedFiles: null }]);
            lastPrompt_1 = this.prompts[this.prompts.length - 1];
          }
          processResponse(outputResponse);
        }
        if (typeof outputResponse === "object") {
          var tPrompt = {
            prompt: outputResponse.prompt,
            attachedFiles: outputResponse.attachedFiles,
            response: outputResponse.response,
            isResponseHelpful: isNullOrUndefined(outputResponse.isResponseHelpful) ? null : outputResponse.isResponseHelpful
          };
          if (this.prompt === tPrompt.prompt || this.lastStreamPrompt === tPrompt.prompt) {
            lastPrompt_1.attachedFiles = tPrompt.attachedFiles;
            lastPrompt_1.isResponseHelpful = tPrompt.isResponseHelpful;
            processResponse(tPrompt.response);
          } else {
            this.prompts = this.prompts.concat([tPrompt]);
            this.renderOutputContainer(tPrompt.prompt, tPrompt.response, tPrompt.attachedFiles, this.prompts.length - 1, true, isFinalUpdate);
          }
          if (!isFinalUpdate) {
            this.lastStreamPrompt = tPrompt.prompt;
          }
        }
        if (isFinalUpdate) {
          this.setupViewportFilling();
        }
        if (!this.enableStreaming) {
          if (isFinalUpdate && this.hasStopResponseButton()) {
            this.toggleStopRespondingButton(false);
          }
          this.isResponseRequested = !isFinalUpdate;
        }
      }
      this.isProtectedOnChange = prevOnChange;
      if (this.enableScrollToBottom && this.downArrowIcon && this.outputContentBodyEle && this.contentWrapper) {
        this.downArrowIcon.visible = this.outputContentBodyEle.scrollHeight > this.contentWrapper.clientHeight;
      }
    };
    AIAssistView2.prototype.scrollToBottom = function() {
      this.updateScroll(this.contentWrapper);
    };
    AIAssistView2.prototype.onPropertyChanged = function(newProp, oldProp) {
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "width":
          case "height":
            this.setDimension(this.element, this.width, this.height);
            break;
          case "cssClass":
            this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
            break;
          case "promptIconCss":
            this.updateIcons(newProp.promptIconCss, true);
            break;
          case "responseIconCss":
            this.updateIcons(newProp.responseIconCss);
            break;
          case "showHeader":
            this.updateHeader(this.showHeader, this.toolbarHeader, this.viewWrapper);
            break;
          case "promptSuggestions":
            this.updatePromptSuggestionTemplate();
            break;
          case "showClearButton":
            if (this.footerTemplate) {
              return;
            } else {
              this.updateClearToolbarItemInSettings();
              this.updateFooterToolbar();
            }
            break;
          case "promptPlaceholder":
            this.updatePlaceholder(this.promptPlaceholder);
            break;
          case "promptSuggestionsHeader": {
            this.suggestionHeader.innerHTML = this.promptSuggestionsHeader;
            var suggestionHeaderElem = this.element.querySelector(".e-suggestions .e-suggestion-header");
            if (!suggestionHeaderElem) {
              this.suggestionsElement.append(this.suggestionHeader);
            }
            break;
          }
          case "activeView": {
            var previousViewIndex = this.getIndex(oldProp.activeView);
            this.updateActiveView(previousViewIndex);
            break;
          }
          case "enableRtl":
            this.element.classList[this.enableRtl ? "add" : "remove"]("e-rtl");
            if (!isNullOrUndefined(this.toolbar)) {
              this.toolbar.enableRtl = this.enableRtl;
              this.toolbar.dataBind();
            }
            break;
          case "toolbarSettings":
            this.updateToolbarSettings(oldProp.toolbarSettings);
            break;
          case "footerToolbarSettings":
            if (newProp.footerToolbarSettings.items) {
              this.updateFooterToolbar();
            }
            if (newProp.footerToolbarSettings.toolbarPosition) {
              this.updateFooterType(newProp.footerToolbarSettings.toolbarPosition);
            }
            break;
          case "promptToolbarSettings":
          case "responseToolbarSettings":
          case "prompts":
            this.isOutputRenderingStop = false;
            if (this.outputElement) {
              remove(this.outputElement);
            }
            if (this.hasStopResponseButton()) {
              this.toggleStopRespondingButton(false);
            }
            this.aiAssistViewRendered = false;
            this.latestResponseMinHeight = null;
            this.renderOutputContent(true);
            this.detachCodeCopyEventHandler();
            if (this.bannerTemplate) {
              this.updateBannerTemplate(this.bannerTemplate);
            }
            this.checkIsScrollable();
            this.setupViewportFilling();
            break;
          case "prompt":
            if (!this.footerTemplate) {
              this.editableTextarea.innerText = this.prompt;
              this.refreshTextareaUI();
              this.pushToUndoStack(this.prompt);
            }
            break;
          case "locale":
            this.updateLocale();
            break;
          case "bannerTemplate": {
            this.updateBannerTemplate(newProp.bannerTemplate);
            break;
          }
          case "promptSuggestionItemTemplate": {
            if (!isNullOrUndefined(newProp.promptSuggestionItemTemplate)) {
              this.updatePromptSuggestionTemplate();
            }
            break;
          }
          case "footerTemplate": {
            this.updateFooterTemplate();
            break;
          }
          case "enableStreaming": {
            this.enableStreaming = newProp.enableStreaming;
            break;
          }
          case "enableAttachments": {
            if (!this.footerTemplate) {
              this.updateAttachmentToolbarItemInSettings();
              this.updateFooterToolbar();
            }
            break;
          }
          case "enableScrollToBottom": {
            if (this.enableScrollToBottom) {
              this.bindScroll();
            } else {
              this.unBindScroll();
            }
            break;
          }
          case "attachmentSettings":
            this.updateAttachmentSettings(newProp.attachmentSettings);
            break;
          case "speechToTextSettings":
            this.handleSTTDynamicChange(newProp.speechToTextSettings, oldProp.speechToTextSettings);
            break;
        }
      }
    };
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "prompt", void 0);
    __decorate4([
      Property("Type prompt for assistance...")
    ], AIAssistView2.prototype, "promptPlaceholder", void 0);
    __decorate4([
      Collection([], Prompt)
    ], AIAssistView2.prototype, "prompts", void 0);
    __decorate4([
      Property([])
    ], AIAssistView2.prototype, "promptSuggestions", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "promptSuggestionsHeader", void 0);
    __decorate4([
      Property(true)
    ], AIAssistView2.prototype, "showHeader", void 0);
    __decorate4([
      Complex({ items: [] }, ToolbarSettings)
    ], AIAssistView2.prototype, "toolbarSettings", void 0);
    __decorate4([
      Property(0)
    ], AIAssistView2.prototype, "activeView", void 0);
    __decorate4([
      Property(null)
    ], AIAssistView2.prototype, "promptIconCss", void 0);
    __decorate4([
      Property(null)
    ], AIAssistView2.prototype, "responseIconCss", void 0);
    __decorate4([
      Property("100%")
    ], AIAssistView2.prototype, "width", void 0);
    __decorate4([
      Property("100%")
    ], AIAssistView2.prototype, "height", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "cssClass", void 0);
    __decorate4([
      Collection([], AssistView)
    ], AIAssistView2.prototype, "views", void 0);
    __decorate4([
      Complex({ width: null, items: [] }, PromptToolbarSettings)
    ], AIAssistView2.prototype, "promptToolbarSettings", void 0);
    __decorate4([
      Complex({ width: null, items: [] }, ResponseToolbarSettings)
    ], AIAssistView2.prototype, "responseToolbarSettings", void 0);
    __decorate4([
      Complex({ toolbarPosition: "Inline", items: [] }, FooterToolbarSettings)
    ], AIAssistView2.prototype, "footerToolbarSettings", void 0);
    __decorate4([
      Complex({ enable: false }, SpeechToTextSettings)
    ], AIAssistView2.prototype, "speechToTextSettings", void 0);
    __decorate4([
      Property(false)
    ], AIAssistView2.prototype, "enableAttachments", void 0);
    __decorate4([
      Complex({ saveUrl: "", removeUrl: "", maxFileSize: 2e6, allowedFileTypes: "", maximumCount: 10 }, AttachmentSettings)
    ], AIAssistView2.prototype, "attachmentSettings", void 0);
    __decorate4([
      Property(false)
    ], AIAssistView2.prototype, "showClearButton", void 0);
    __decorate4([
      Property(true)
    ], AIAssistView2.prototype, "enableScrollToBottom", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "footerTemplate", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "promptItemTemplate", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "responseItemTemplate", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "promptSuggestionItemTemplate", void 0);
    __decorate4([
      Property("")
    ], AIAssistView2.prototype, "bannerTemplate", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "promptRequest", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "promptChanged", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "stopRespondingClick", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "beforeAttachmentUpload", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "attachmentUploadSuccess", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "attachmentUploadFailure", void 0);
    __decorate4([
      Event()
    ], AIAssistView2.prototype, "attachmentRemoved", void 0);
    AIAssistView2 = __decorate4([
      NotifyPropertyChanges
    ], AIAssistView2);
    return AIAssistView2;
  })(AIAssistBase)
);

// node_modules/@syncfusion/ej2-interactive-chat/src/chat-ui/chat-ui.js
var __extends4 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : new P(function(resolve2) {
        resolve2(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var MessageStatus = (
  /** @class */
  (function(_super) {
    __extends4(MessageStatus2, _super);
    function MessageStatus2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("")
    ], MessageStatus2.prototype, "iconCss", void 0);
    __decorate5([
      Property("")
    ], MessageStatus2.prototype, "text", void 0);
    __decorate5([
      Property("")
    ], MessageStatus2.prototype, "tooltip", void 0);
    return MessageStatus2;
  })(ChildProperty)
);
var User = (
  /** @class */
  (function(_super) {
    __extends4(User2, _super);
    function User2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("")
    ], User2.prototype, "id", void 0);
    __decorate5([
      Property("Default")
    ], User2.prototype, "user", void 0);
    __decorate5([
      Property("")
    ], User2.prototype, "avatarUrl", void 0);
    __decorate5([
      Property("")
    ], User2.prototype, "avatarBgColor", void 0);
    __decorate5([
      Property("")
    ], User2.prototype, "cssClass", void 0);
    __decorate5([
      Property("")
    ], User2.prototype, "statusIconCss", void 0);
    return User2;
  })(ChildProperty)
);
var MessageToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends4(MessageToolbarSettings2, _super);
    function MessageToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("100%")
    ], MessageToolbarSettings2.prototype, "width", void 0);
    __decorate5([
      Collection([], ToolbarItem)
    ], MessageToolbarSettings2.prototype, "items", void 0);
    __decorate5([
      Event()
    ], MessageToolbarSettings2.prototype, "itemClicked", void 0);
    return MessageToolbarSettings2;
  })(ChildProperty)
);
var MessageReply = (
  /** @class */
  (function(_super) {
    __extends4(MessageReply2, _super);
    function MessageReply2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Complex({}, User)
    ], MessageReply2.prototype, "user", void 0);
    __decorate5([
      Property("")
    ], MessageReply2.prototype, "text", void 0);
    __decorate5([
      Property([])
    ], MessageReply2.prototype, "mentionUsers", void 0);
    __decorate5([
      Property("")
    ], MessageReply2.prototype, "messageID", void 0);
    __decorate5([
      Property("")
    ], MessageReply2.prototype, "timestamp", void 0);
    __decorate5([
      Property("")
    ], MessageReply2.prototype, "timestampFormat", void 0);
    __decorate5([
      Property(null)
    ], MessageReply2.prototype, "attachedFile", void 0);
    return MessageReply2;
  })(ChildProperty)
);
var Message = (
  /** @class */
  (function(_super) {
    __extends4(Message2, _super);
    function Message2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("")
    ], Message2.prototype, "id", void 0);
    __decorate5([
      Property("")
    ], Message2.prototype, "text", void 0);
    __decorate5([
      Complex({}, User)
    ], Message2.prototype, "author", void 0);
    __decorate5([
      Property("")
    ], Message2.prototype, "timeStamp", void 0);
    __decorate5([
      Property("")
    ], Message2.prototype, "timeStampFormat", void 0);
    __decorate5([
      Complex({}, MessageStatus)
    ], Message2.prototype, "status", void 0);
    __decorate5([
      Property(false)
    ], Message2.prototype, "isPinned", void 0);
    __decorate5([
      Complex({}, MessageReply)
    ], Message2.prototype, "replyTo", void 0);
    __decorate5([
      Property(false)
    ], Message2.prototype, "isForwarded", void 0);
    __decorate5([
      Property(null)
    ], Message2.prototype, "attachedFile", void 0);
    __decorate5([
      Property([])
    ], Message2.prototype, "mentionUsers", void 0);
    return Message2;
  })(ChildProperty)
);
var FileAttachmentSettings = (
  /** @class */
  (function(_super) {
    __extends4(FileAttachmentSettings2, _super);
    function FileAttachmentSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "saveUrl", void 0);
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "removeUrl", void 0);
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "path", void 0);
    __decorate5([
      Property(Blob)
    ], FileAttachmentSettings2.prototype, "saveFormat", void 0);
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "allowedFileTypes", void 0);
    __decorate5([
      Property(3e7)
    ], FileAttachmentSettings2.prototype, "maxFileSize", void 0);
    __decorate5([
      Property(true)
    ], FileAttachmentSettings2.prototype, "enableDragAndDrop", void 0);
    __decorate5([
      Property(10)
    ], FileAttachmentSettings2.prototype, "maximumCount", void 0);
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "previewTemplate", void 0);
    __decorate5([
      Property("")
    ], FileAttachmentSettings2.prototype, "attachmentTemplate", void 0);
    __decorate5([
      Event()
    ], FileAttachmentSettings2.prototype, "attachmentClick", void 0);
    return FileAttachmentSettings2;
  })(ChildProperty)
);
var ChatUI = (
  /** @class */
  (function(_super) {
    __extends4(ChatUI2, _super);
    function ChatUI2(options, element) {
      var _this = _super.call(this, options, element) || this;
      _this.multiplier = 3;
      _this.uploadedFiles = [];
      return _this;
    }
    ChatUI2.prototype.preRender = function() {
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
    };
    ChatUI2.prototype.getDirective = function() {
      return "EJS-CHATUI";
    };
    ChatUI2.prototype.getModuleName = function() {
      return "chat-ui";
    };
    ChatUI2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    ChatUI2.prototype.render = function() {
      this.renderChatUIView();
    };
    ChatUI2.prototype.renderChatUIView = function() {
      this.intl = new Internationalization();
      this.setDimension(this.element, this.width, this.height);
      this.renderViewSections(this.element, "e-chat-header", "e-chat-content");
      this.viewWrapper = this.element.querySelector(".e-chat-content");
      this.chatHeader = this.element.querySelector(".e-chat-header");
      this.initializeLocale();
      this.renderChatHeader();
      this.renderChatContentElement();
      this.renderChatSuggestionsElement();
      this.renderChatFooterContent();
      this.addCssClass(this.element, this.cssClass);
      this.addRtlClass(this.element, this.enableRtl);
      this.updateHeader(this.showHeader, this.chatHeader, this.viewWrapper);
      this.updateEmptyChatTemplate();
      this.updateFooterElementClass();
      this.wireEvents();
      this.renderTypingIndicator();
      this.updateScrollPosition(false, 0);
      this.initializeCompactMode();
    };
    ChatUI2.prototype.initializeLocale = function() {
      this.l10n = new L10n("chat-ui", {
        oneUserTyping: "{0} is typing",
        twoUserTyping: "{0} and {1} are typing",
        threeUserTyping: "{0}, {1}, and {2} other are typing",
        multipleUsersTyping: "{0}, {1}, and {2} others are typing",
        noRecordsTemplate: "No records found",
        forwarded: "Forwarded",
        send: "Send",
        attachments: "Attach File",
        close: "Close",
        download: "Download",
        filePreview: "No Preview Available",
        fileCountFailure: "Upload limit reached: Maximum {0} files allowed. Remove extra files to proceed uploading",
        fileSizeFailure: "Upload failed: {0} files exceeded the maximum size",
        unpin: "Unpin",
        viewChat: "View in Chat"
      }, this.locale);
      this.l10n.setLocale(this.locale);
    };
    ChatUI2.prototype.updateScrollPosition = function(isMethodCall, timeDelay) {
      var _this = this;
      if (this.isReact || this.isAngular) {
        setTimeout(function() {
          if (isMethodCall) {
            _this.handleAutoScroll();
          } else {
            _this.scrollToBottom();
          }
        }, timeDelay);
      } else {
        this.scrollToBottom();
      }
    };
    ChatUI2.prototype.renderChatHeader = function() {
      if (this.headerText) {
        var headerContainer = this.createElement("div", { className: "e-header" });
        if (this.headerIconCss) {
          var iconElement = this.createElement("span", { className: "e-header-icon e-icons " + this.headerIconCss });
          if (this.user.statusIconCss) {
            iconElement.appendChild(this.chatStatus(this.user.statusIconCss));
          }
          headerContainer.appendChild(iconElement);
        }
        var headerTextElement = this.createElement("div", { className: "e-header-text" });
        headerTextElement.innerHTML = this.headerText;
        headerContainer.appendChild(headerTextElement);
        this.chatHeader.appendChild(headerContainer);
        this.renderChatHeaderToolbar(headerContainer);
      }
    };
    ChatUI2.prototype.renderChatHeaderToolbar = function(headerContainer) {
      var _this = this;
      if (!isNullOrUndefined(this.headerToolbar) && this.headerToolbar.items.length > 0) {
        var toolbarEle = this.createElement("div", { className: "e-chat-toolbar" });
        var pushToolbar = this.headerToolbar.items.map(function(item) {
          return {
            type: item.type,
            template: item.template,
            disabled: item.disabled,
            cssClass: item.cssClass,
            visible: item.visible,
            tooltipText: item.tooltip,
            prefixIcon: item.iconCss,
            text: item.text,
            align: item.align,
            tabIndex: item.tabIndex
          };
        });
        this.toolbar = new Toolbar({
          items: pushToolbar,
          height: "100%",
          enableRtl: this.enableRtl,
          clicked: function(args) {
            var eventItemArgs = {
              type: args.item.type,
              text: args.item.text,
              iconCss: args.item.prefixIcon,
              cssClass: args.item.cssClass,
              tooltip: args.item.tooltipText,
              template: args.item.template,
              disabled: args.item.disabled,
              visible: args.item.visible,
              align: args.item.align,
              tabIndex: args.item.tabIndex
            };
            var eventArgs = {
              item: eventItemArgs,
              event: args.originalEvent,
              cancel: false
            };
            if (_this.headerToolbar.itemClicked) {
              _this.headerToolbar.itemClicked.call(_this, eventArgs);
            }
          }
        });
        if (this.isReact) {
          this.toolbar.isReact = this.isReact;
          this.toolbar.on("render-react-toolbar-template", this.addReactToolbarPortals, this);
        }
        this.toolbar.appendTo(toolbarEle);
        headerContainer.appendChild(toolbarEle);
      }
    };
    ChatUI2.prototype.addReactToolbarPortals = function(args) {
      if (this.isReact && args) {
        this.portals = this.portals.concat(args);
      }
    };
    ChatUI2.prototype.updateHeaderToolbar = function() {
      var headerContainer = this.chatHeader.querySelector(".e-header");
      if (!isNullOrUndefined(this.toolbar)) {
        var pushToolbar = this.headerToolbar.items.map(function(item) {
          return {
            type: item.type,
            template: item.template,
            disabled: item.disabled,
            cssClass: item.cssClass,
            visible: item.visible,
            tooltipText: item.tooltip,
            prefixIcon: item.iconCss,
            text: item.text,
            align: item.align,
            tabIndex: item.tabIndex
          };
        });
        this.toolbar.items = pushToolbar;
      } else {
        this.renderChatHeaderToolbar(headerContainer);
      }
    };
    ChatUI2.prototype.renderChatContentElement = function() {
      this.messageWrapper = this.createElement("div", { className: "e-message-wrapper", attrs: { "tabindex": "0" } });
      this.pinnedMessageWrapper = this.createElement("div", { className: "e-pinned-message-wrapper" });
      this.renderPinnedMessage();
      this.viewWrapper.prepend(this.pinnedMessageWrapper, this.messageWrapper);
      this.content = this.createElement("div", { className: "e-typing-suggestions" });
      this.viewWrapper.append(this.content);
      this.renderScrollDown();
      this.setChatMsgId();
      this.renderMessageGroup(this.messageWrapper);
    };
    ChatUI2.prototype.updateEmptyChatTemplate = function() {
      if (isNullOrUndefined(this.messages) || this.messages.length <= 0) {
        this.renderBannerView(this.emptyChatTemplate, this.messageWrapper, "emptyChatTemplate");
        this.isEmptyChatTemplateRendered = isNullOrUndefined(this.messageWrapper.querySelector(".e-empty-chat-template")) ? false : true;
        if (this.pinnedMessageWrapper) {
          this.pinnedMessageWrapper.style.display = "none";
        }
      }
    };
    ChatUI2.prototype.renderChatMessageToolbar = function(messageItem, msg) {
      var _this = this;
      var messageOptionsToolbar = this.createElement("div", { className: "e-chat-message-toolbar" });
      var pushToolbar = [];
      if (this.messageToolbarSettings.items.length > 0) {
        var items = this.messageToolbarSettings.items.filter(function(item) {
          var isCopyIcon = item.iconCss.includes("e-chat-copy");
          var hasFileAttachment = _this.hasAttachment(msg) && !_this.isImageFile(msg.attachedFile.rawFile);
          if (isCopyIcon && hasFileAttachment) {
            return false;
          }
          return item.iconCss !== "" || item.text !== void 0 || item.type !== "Button" || item.align !== "Left" || item.visible !== true || item.disabled !== false || item.tooltip !== "" || item.cssClass !== "" || item.template !== null || item.tabIndex !== -1;
        });
        pushToolbar = items.map(function(item) {
          return {
            type: item.type,
            template: item.template,
            disabled: item.disabled,
            cssClass: item.cssClass,
            visible: item.visible,
            tooltipText: item.tooltip,
            prefixIcon: item.iconCss,
            text: item.text,
            align: item.align,
            width: _this.messageToolbarSettings.width,
            tabIndex: item.tabIndex
          };
        });
      }
      var messageToolbar = new Toolbar({
        items: pushToolbar,
        clicked: function(args) {
          _this.handleMessageToolbarClick(args, messageToolbar, messageItem);
        }
      });
      messageToolbar.appendTo(messageOptionsToolbar);
      this.updatePinnedMessage(msg, messageToolbar);
      return messageOptionsToolbar;
    };
    ChatUI2.prototype.triggerMsgClickedEvent = function(item, event2, message) {
      var eventArgs = {
        item,
        event: event2,
        cancel: false,
        message
      };
      if (this.messageToolbarSettings.itemClicked) {
        this.messageToolbarSettings.itemClicked.call(this, eventArgs);
      }
      return eventArgs;
    };
    ChatUI2.prototype.handleMessageToolbarClick = function(args, messageToolbar, messageItem) {
      var messageID = messageItem.id;
      var message = this.messages.find(function(msg) {
        return msg.id === messageID;
      });
      var eventArgs = this.triggerMsgClickedEvent(args.item, args.originalEvent, message);
      if (!eventArgs.cancel) {
        switch (args.item.prefixIcon) {
          case "e-icons e-chat-copy":
            this.handleCopyAction(args, messageToolbar, message);
            break;
          case "e-icons e-chat-reply":
            this.handleReplyAction(message);
            break;
          case "e-icons e-chat-trash":
            this.handleDeleteAction(messageID);
            break;
          case "e-icons e-chat-pin":
          case "e-icons e-chat-unpin":
            this.togglePin(message, args, messageToolbar);
            break;
        }
      }
    };
    ChatUI2.prototype.togglePin = function(message, args, messageToolbar) {
      var pinnedText = this.pinnedMessageWrapper.querySelector(".e-pinned-message-text");
      var currentlyPinnedId = pinnedText.getAttribute("data-index");
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      if (message.isPinned) {
        message.isPinned = false;
      } else {
        if (currentlyPinnedId && currentlyPinnedId !== message.id) {
          this.unpinMessage(currentlyPinnedId);
        }
        message.isPinned = true;
      }
      this.isProtectedOnChange = prevOnChange;
      args.item.prefixIcon = message.isPinned ? "e-icons e-chat-unpin" : "e-icons e-chat-pin";
      args.item.tooltipText = message.isPinned ? "Unpin" : "Pin";
      messageToolbar.dataBind();
      this.updatePinnedMessage(message, messageToolbar);
    };
    ChatUI2.prototype.handleDeleteAction = function(messageID) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var messageToDelete = this.messages.find(function(msg) {
        return msg.id === messageID;
      });
      if (messageToDelete && messageToDelete.isPinned) {
        this.unpinMessage(messageID);
      }
      this.messages = this.messages.filter(function(msg) {
        return msg.id !== messageID;
      });
      this.isProtectedOnChange = prevOnChange;
      var messageItem = this.messageWrapper.querySelector("#" + messageID);
      if (!messageItem) {
        return;
      }
      var messageGroup = messageItem.closest(".e-message-group");
      if (!messageGroup) {
        return;
      }
      messageGroup.removeChild(messageItem);
      if (messageGroup.querySelector(".e-message-item") === null) {
        this.messageWrapper.removeChild(messageGroup);
      }
      this.cleanupTimeBreaks();
      this.updateEmptyChatTemplate();
    };
    ChatUI2.prototype.cleanupTimeBreaks = function() {
      var _this = this;
      var timeBreaks = Array.from(this.messageWrapper.querySelectorAll(".e-timebreak"));
      var consecutiveBreaks = [];
      timeBreaks.forEach(function(timeBreak, index) {
        var nextElement = timeBreak.nextElementSibling;
        if ((!nextElement || !nextElement.classList.contains("e-timebreak")) && index === timeBreaks.length - 1) {
          _this.messageWrapper.removeChild(timeBreak);
        } else if (!nextElement || !nextElement.classList.contains("e-timebreak")) {
          if (consecutiveBreaks.length > 0) {
            consecutiveBreaks.forEach(function(breakElem) {
              _this.messageWrapper.removeChild(breakElem);
            });
          }
          consecutiveBreaks = [];
        } else {
          consecutiveBreaks.push(timeBreak);
        }
      });
    };
    ChatUI2.prototype.handleCopyAction = function(args, messageToolbar, msg) {
      if (msg.text) {
        this.getClipBoardContent(this.getMessageText(msg));
      }
      if (this.hasAttachment(msg)) {
        var file = msg.attachedFile.rawFile;
        this.writeFileToClipboard(file);
      }
      args.item.prefixIcon = "e-icons e-chat-check";
      messageToolbar.dataBind();
      setTimeout(function() {
        args.item.prefixIcon = "e-icons e-chat-copy";
        messageToolbar.dataBind();
      }, 1e3);
    };
    ChatUI2.prototype.handleReplyAction = function(message) {
      var replyWrapper = this.footer.querySelector(".e-reply-wrapper");
      if (!replyWrapper) {
        replyWrapper = this.renderReplyElement(message, true);
        this.footer.prepend(replyWrapper);
      } else {
        var userElement = replyWrapper.querySelector(".e-reply-message-user");
        var timeElement = replyWrapper.querySelector(".e-reply-message-time");
        var textElement = replyWrapper.querySelector(".e-reply-message-text");
        if (userElement && textElement) {
          userElement.textContent = message.author.user;
          timeElement.textContent = this.showTimeStamp ? this.getFormattedTime(message.timeStamp, message.timeStampFormat) : "";
          textElement.innerHTML = this.getMessageText(message);
        }
        var previewContainer = replyWrapper.querySelector(".e-reply-media-preview");
        if (previewContainer) {
          previewContainer.remove();
        }
        if (this.hasAttachment(message)) {
          var file = message.attachedFile;
          if (file) {
            var newReplyContent = this.createFileReplyContent(message);
            var replyContent = replyWrapper.querySelector(".e-reply-content");
            if (replyContent) {
              if (textElement) {
                replyContent.insertBefore(newReplyContent, textElement);
              }
            }
          }
        }
      }
      if (this.editableTextarea) {
        this.setFocusAtEnd(this.editableTextarea);
      }
      this.currentReplyTo = message;
    };
    ChatUI2.prototype.renderReplyElement = function(message, withClearIcon) {
      var _this = this;
      if (withClearIcon === void 0) {
        withClearIcon = false;
      }
      if ((!message.replyTo || !message.replyTo.user || !message.replyTo.text && !message.replyTo.attachedFile || !message.replyTo.messageID) && !withClearIcon) {
        return null;
      }
      var replyWrapper = this.createElement("div", { className: "e-reply-wrapper" });
      var time;
      var timeStampFormat;
      if (withClearIcon) {
        time = message.timeStamp ? message.timeStamp : /* @__PURE__ */ new Date();
        timeStampFormat = message.timeStampFormat ? message.timeStampFormat : this.timeStampFormat;
      } else {
        time = message.replyTo.timestamp ? message.replyTo.timestamp : /* @__PURE__ */ new Date();
        timeStampFormat = message.replyTo.timestampFormat ? message.replyTo.timestampFormat : this.timeStampFormat;
      }
      var formattedTime = this.getFormattedTime(time, timeStampFormat);
      var replyContent = this.createElement("div", {
        className: "e-reply-content",
        innerHTML: "<span class='e-reply-message-text'>" + (withClearIcon ? this.getMessageText(message) : this.getMessageText(message.replyTo)) + "</span>"
      });
      var messageDetails = this.createElement("div", {
        className: "e-reply-message-details",
        innerHTML: "\n                <span class='e-reply-message-user'>" + (withClearIcon ? message.author.user : message.replyTo.user.user) + "</span>\n                <span class='e-reply-message-time'>" + (this.showTimeStamp ? formattedTime : "") + "</span>"
      });
      if (this.hasAttachment(message.replyTo) || this.hasAttachment(message)) {
        var file = withClearIcon ? this.hasAttachment(message) ? message.attachedFile : null : this.hasAttachment(message.replyTo) ? message.replyTo.attachedFile : null;
        var sourceMessage = withClearIcon ? message : message.replyTo;
        if (file) {
          var fileReplyContent = this.createFileReplyContent(sourceMessage);
          var textElement = replyContent.querySelector(".e-reply-message-text");
          if (textElement) {
            replyContent.insertBefore(fileReplyContent, textElement);
          }
        }
      }
      replyContent.prepend(messageDetails);
      if (withClearIcon) {
        var clearIcon = this.createElement("span", {
          className: "e-chat-close e-icons",
          attrs: { title: this.l10n.getConstant("close") }
        });
        EventHandler.add(clearIcon, "click", this.clearReplyWrapper.bind(this));
        messageDetails.appendChild(clearIcon);
      } else {
        EventHandler.add(replyWrapper, "click", function() {
          _this.scrollToMessage(message.replyTo.messageID);
        }, this);
      }
      replyWrapper.prepend(replyContent);
      return replyWrapper;
    };
    ChatUI2.prototype.createFileReplyContent = function(message) {
      var fileReplyContent = this.createElement("div", { className: "e-reply-media-preview" });
      var messageText = this.getMessageText(message);
      var hasText = messageText.trim() !== "";
      var file = message.attachedFile;
      if (this.isImageFile(file.rawFile)) {
        var thumbnailImage = this.createImageContent(file, "e-reply-media-thumb");
        fileReplyContent.appendChild(thumbnailImage);
      } else if (this.isVideoFile(file.rawFile)) {
        var thumbnailvideo = this.createElement("video", {
          attrs: {
            src: file.fileSource,
            alt: file.name,
            disablepictureinpicture: "true",
            playsinline: "true"
          },
          className: "e-reply-media-thumb"
        });
        fileReplyContent.appendChild(thumbnailvideo);
      } else {
        var fileIcon = this.createElement("span", { className: "e-chat-file-icon e-icons" });
        fileReplyContent.appendChild(fileIcon);
      }
      if (!hasText) {
        var labelElement = this.createElement("span", {
          className: "e-reply-file-name",
          innerHTML: file.name,
          attrs: { title: file.name }
        });
        fileReplyContent.appendChild(labelElement);
      }
      return fileReplyContent;
    };
    ChatUI2.prototype.renderPinnedMessage = function() {
      var _this = this;
      var pinnedMessage = this.createElement("div", { className: "e-pinned-message" });
      var pinIcon = this.createElement("span", { className: "e-icons e-chat-pin" });
      var messageText = this.createElement("span", { className: "e-pinned-message-text" });
      var pinDropdownButtonEle = this.createElement("button", { id: "pinnedMessageDropdown" });
      this.dropDownButton = new DropDownButton({
        items: [
          { text: this.l10n.getConstant("viewChat"), iconCss: "e-icons e-chat-view" },
          { text: this.l10n.getConstant("unpin"), iconCss: "e-icons e-chat-unpin" }
        ],
        cssClass: "e-pinned-dropdown-popup e-caret-hide",
        iconCss: "e-icons e-more-vertical-1",
        select: function(args) {
          var messageId = _this.pinnedMessageWrapper.querySelector(".e-pinned-message-text").getAttribute("data-index");
          var message = _this.messages.find(function(msg) {
            return msg.id === messageId;
          });
          var toolbarItemModel = {
            text: args.item.text || "",
            prefixIcon: args.item.iconCss || "",
            id: args.item.id || ""
          };
          var eventArgs = _this.triggerMsgClickedEvent(toolbarItemModel, args.event, message);
          if (!eventArgs.cancel) {
            if (args.item.text === _this.l10n.getConstant("viewChat")) {
              _this.scrollToMessage(messageId);
            } else if (args.item.text === _this.l10n.getConstant("unpin")) {
              _this.unpinMessage(messageId);
            }
          }
        }
      });
      this.dropDownButton.appendTo(pinDropdownButtonEle);
      pinnedMessage.append(pinIcon, messageText);
      this.pinnedMessageWrapper.append(pinnedMessage, pinDropdownButtonEle);
    };
    ChatUI2.prototype.updatePinnedMessage = function(message, messageToolbar) {
      var pinnedText = this.pinnedMessageWrapper.querySelector(".e-pinned-message-text");
      var currentlyPinnedId = pinnedText.getAttribute("data-index");
      if (message.isPinned) {
        if (currentlyPinnedId && currentlyPinnedId !== message.id) {
          var previousMessage = this.messages.find(function(msg) {
            return msg.id === currentlyPinnedId;
          });
          if (previousMessage) {
            previousMessage.isPinned = false;
          }
        }
        this.togglePinnedIcon(messageToolbar);
        if (pinnedText) {
          if (this.hasAttachment(message)) {
            pinnedText.innerHTML = "";
            this.pinAttachmentMessage(pinnedText, message);
          } else {
            pinnedText.innerHTML = this.getMessageText(message);
          }
          pinnedText.setAttribute("data-index", message.id);
        }
        this.pinnedMessageWrapper.style.display = "flex";
        this.lastPinnedToolbar = messageToolbar;
      } else if (currentlyPinnedId === message.id) {
        this.pinnedMessageWrapper.style.display = "none";
        this.togglePinnedIcon();
      }
    };
    ChatUI2.prototype.pinAttachmentMessage = function(container, message) {
      var file = message.attachedFile;
      if (!file) {
        return;
      }
      var mediaElement;
      if (this.isImageFile(file.rawFile)) {
        mediaElement = this.createImageContent(file, "e-pinned-img-thumb");
      } else if (this.isVideoFile(file.rawFile)) {
        mediaElement = this.createElement("video", {
          attrs: {
            src: file.fileSource,
            alt: file.name,
            disablepictureinpicture: "true",
            playsinline: "true"
          },
          className: "e-pinned-img-thumb"
        });
      } else {
        mediaElement = this.createElement("span", { className: "e-chat-file-icon e-icons" });
      }
      var messageText = this.getMessageText(message);
      var hasText = messageText.trim() !== "";
      var labelAttrs = {};
      if (!hasText) {
        labelAttrs.title = file.name;
      }
      var pinContent = this.createElement("span", {
        className: hasText ? "e-pinned-message-content" : "e-pinned-file-name",
        innerHTML: hasText ? messageText : file.name,
        attrs: labelAttrs
      });
      this.appendChildren(container, mediaElement, pinContent);
    };
    ChatUI2.prototype.togglePinnedIcon = function(messageToolbar) {
      if (this.lastPinnedToolbar) {
        this.lastPinnedToolbar.items.forEach(function(item) {
          if (item.prefixIcon === "e-icons e-chat-unpin") {
            item.prefixIcon = "e-icons e-chat-pin";
            item.tooltipText = "Pin";
          }
        });
        this.lastPinnedToolbar.dataBind();
      }
      if (messageToolbar) {
        messageToolbar.items.forEach(function(item) {
          if (item.prefixIcon === "e-icons e-chat-pin") {
            item.prefixIcon = "e-icons e-chat-unpin";
            item.tooltipText = "Unpin";
          }
        });
        messageToolbar.dataBind();
        this.lastPinnedToolbar = messageToolbar;
      } else {
        this.lastPinnedToolbar = null;
      }
    };
    ChatUI2.prototype.unpinMessage = function(messageID) {
      this.pinnedMessageWrapper.style.display = "none";
      this.togglePinnedIcon();
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var message = this.messages.find(function(msg) {
        return msg.id === messageID;
      });
      if (message) {
        message.isPinned = false;
      }
      this.isProtectedOnChange = prevOnChange;
    };
    ChatUI2.prototype.wireMessageToolbarEvents = function(messageItem, toolbarEle) {
      var _this = this;
      EventHandler.add(messageItem, "mouseover", function() {
        _this.handleMessageMouseEvents(true, messageItem, toolbarEle);
      }, this);
      EventHandler.add(messageItem, "mouseleave", function() {
        _this.handleMessageMouseEvents(false, messageItem, toolbarEle);
      }, this);
    };
    ChatUI2.prototype.handleMessageMouseEvents = function(isMouseOver, messageItem, toolbarEle) {
      if (isMouseOver) {
        var isLeftMessage = messageItem.parentElement.classList.contains("e-left");
        toolbarEle.style.visibility = "hidden";
        toolbarEle.style.display = "block";
        var toolbarRect = toolbarEle.getBoundingClientRect();
        toolbarEle.style.visibility = "";
        toolbarEle.style.display = "none";
        var messageContent = this.messageTemplate ? messageItem : isLeftMessage ? messageItem.querySelector(".e-message-content") : messageItem.querySelector(".e-status-wrapper");
        var messageItemRect = messageItem.getBoundingClientRect();
        var messageContentRect = messageContent.getBoundingClientRect();
        var topPosition = messageContentRect.top - messageItemRect.top - toolbarRect.height;
        if (!isLeftMessage) {
          topPosition += 4;
        }
        var messageWrapperRect = this.messageWrapper.getBoundingClientRect();
        if (messageContentRect.top - messageWrapperRect.top < toolbarRect.height) {
          topPosition = messageContentRect.bottom - messageItemRect.top;
        }
        toolbarEle.style.top = topPosition + "px";
        if (messageContentRect.width < toolbarRect.width && isLeftMessage) {
          toolbarEle.style.left = "0";
          toolbarEle.style.right = "auto";
        } else {
          var statusIconElement = messageContent.querySelector(".e-status-icon");
          var statusIconWidth = statusIconElement ? statusIconElement.getBoundingClientRect().width + 2 : 0;
          var rightPosition = messageItemRect.right - messageContentRect.right + statusIconWidth;
          toolbarEle.style.right = rightPosition + "px";
        }
        toolbarEle.style.display = "";
        toolbarEle.classList.add("e-show");
      } else {
        toolbarEle.classList.remove("e-show");
      }
    };
    ChatUI2.prototype.setChatMsgId = function() {
      var _this = this;
      if (this.messages && this.messages.length > 0) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.messages = this.messages.map(function(msg, index) {
          return __assign2({}, msg, { id: msg.id || _this.element.id + "-message-" + (index + 1) });
        });
        this.isProtectedOnChange = prevOnChange;
      }
    };
    ChatUI2.prototype.renderScrollDown = function() {
      var scrollDownButton = this.createElement("button", { id: "scrollDownButton" });
      this.downArrowIcon = new Fab({
        iconCss: "e-icons e-chat-scroll-down",
        position: "BottomRight",
        target: this.content,
        isPrimary: false
      });
      this.downArrowIcon.appendTo(scrollDownButton);
    };
    ChatUI2.prototype.loadBatch = function() {
      for (var i = this.startIndex - 1; i >= 0; i--) {
        var currIndex = i;
        var prevIndex = i === this.messages.length - 1 ? -1 : currIndex + 1;
        this.updateMessageTimeFormats(this.messages[parseInt(i.toString(), 10)], currIndex);
        var currentMessageDate = this.getMessageDate(currIndex);
        currentMessageDate.setHours(0, 0, 0, 0);
        if (Math.min(currIndex, prevIndex) >= 0) {
          var lastMessageDate = this.getMessageDate(prevIndex);
          lastMessageDate.setHours(0, 0, 0, 0);
          if (currentMessageDate.getTime() === lastMessageDate.getTime()) {
            var prevTimeBreak = this.messageWrapper.querySelectorAll(".e-timebreak")[0];
            if (prevTimeBreak) {
              prevTimeBreak.remove();
            }
          }
        }
        this.renderGroup(this.messageWrapper, this.messages[parseInt(i.toString(), 10)], true, currIndex, prevIndex);
        if (this.showTimeBreak) {
          this.messageWrapper.prepend(this.createTimebreakElement(currentMessageDate));
        }
        var viewportHeight = window.innerHeight;
        var loadHeight = viewportHeight * this.multiplier;
        this.startIndex = i;
        if (this.messageWrapper.scrollHeight > loadHeight) {
          break;
        }
      }
    };
    ChatUI2.prototype.renderMessageGroup = function(chatContentWrapper) {
      var _this = this;
      if (this.loadOnDemand) {
        if (this.messages && this.messages.length <= 0) {
          return;
        }
        createSpinner({ target: this.messageWrapper });
        this.startIndex = this.messages.length;
        this.loadBatch();
      } else {
        this.messages.forEach(function(msg, i) {
          _this.renderGroup(chatContentWrapper, msg, false, i, i - 1);
        });
      }
    };
    ChatUI2.prototype.isTimeBreakAdded = function(chatContentWrapper, loadOldChat) {
      return loadOldChat ? chatContentWrapper.firstElementChild.classList.contains("e-timebreak") : chatContentWrapper.lastElementChild.classList.contains("e-timebreak");
    };
    ChatUI2.prototype.getLastUser = function(prevIndex) {
      if (prevIndex >= 0) {
        return this.messages[parseInt(prevIndex.toString(), 10)].author.id;
      }
      return "";
    };
    ChatUI2.prototype.initializeCompactMode = function() {
      this.element.classList.toggle("e-compact-mode", this.enableCompactMode);
    };
    ChatUI2.prototype.renderGroup = function(chatContentWrapper, msg, loadOldChat, index, prevIndex, isPrependMessages) {
      var messageGroup;
      if (!loadOldChat) {
        this.updateMessageTimeFormats(msg, index);
        this.handleTimeBreak(prevIndex, index, loadOldChat);
      }
      if (!this.enableCompactMode && msg.author.id === this.user.id) {
        var hasTimeBreak = this.showTimeBreak && this.isTimeBreakAdded(chatContentWrapper, loadOldChat);
        if (msg.author.id !== this.getLastUser(prevIndex) || hasTimeBreak) {
          messageGroup = this.createElement("div", { className: "e-message-group e-right " + (this.messageTemplate ? "e-message-item-template" : "") });
          this.manageChatContent(loadOldChat, chatContentWrapper, messageGroup);
          this.addGroupItems(msg, messageGroup, false, true, index, loadOldChat);
        } else {
          var length_1 = this.element.querySelectorAll(".e-message-group.e-right").length;
          messageGroup = this.element.querySelectorAll(".e-message-group.e-right")[loadOldChat ? 0 : length_1 - 1];
          this.addGroupItems(msg, messageGroup, false, true, index, loadOldChat);
        }
      } else {
        if (this.getLastUser(prevIndex) !== msg.author.id || this.isTimeVaries(index, prevIndex)) {
          messageGroup = this.createElement("div", { className: "e-message-group e-left " + (this.messageTemplate ? "e-message-item-template" : "") });
          var avatarElement = this.createAvatarIcon(msg.author, false);
          if (!this.messageTemplate) {
            messageGroup.prepend(avatarElement);
          }
          this.manageChatContent(loadOldChat, chatContentWrapper, messageGroup);
          if (this.loadOnDemand || isPrependMessages) {
            this.loadLeftGroupOnDemand(msg, loadOldChat, index, messageGroup);
          } else {
            this.createLeftGroupItems(messageGroup, msg);
            this.addGroupItems(msg, messageGroup, true, false, index, loadOldChat);
          }
        } else {
          var length_2 = this.element.querySelectorAll(".e-message-group.e-left").length;
          messageGroup = this.element.querySelectorAll(".e-message-group.e-left")[loadOldChat ? 0 : length_2 - 1];
          if (!loadOldChat) {
            this.addGroupItems(msg, messageGroup, false, false, index, loadOldChat);
          } else {
            this.loadLeftGroupOnDemand(msg, loadOldChat, index, messageGroup);
          }
        }
      }
    };
    ChatUI2.prototype.isTimeVaries = function(index, prevIndex) {
      var currentMessageDate = this.getMessageDate(index);
      currentMessageDate.setHours(0, 0, 0, 0);
      var lastMessageDate = this.getMessageDate(prevIndex);
      lastMessageDate.setHours(0, 0, 0, 0);
      return currentMessageDate.getTime() !== lastMessageDate.getTime();
    };
    ChatUI2.prototype.loadLeftGroupOnDemand = function(msg, loadOldChat, index, messageGroup) {
      var isAnyMsgPresent = this.messages[parseInt((index - 1).toString(), 10)] ? true : false;
      var prevAuthorId = isAnyMsgPresent ? this.messages[parseInt((index - 1).toString(), 10)].author.id : "";
      var shouldCreateHeader = prevAuthorId !== msg.author.id ? true : false;
      if (shouldCreateHeader || this.isTimeVaries(index, index - 1)) {
        this.addGroupItems(msg, messageGroup, true, false, index, loadOldChat);
        this.createLeftGroupItems(messageGroup, msg);
      } else {
        this.addGroupItems(msg, messageGroup, false, false, index, loadOldChat);
      }
    };
    ChatUI2.prototype.createLeftGroupItems = function(messageGroup, msg) {
      if (this.messageTemplate) {
        return;
      }
      var userHeaderContainer = this.createElement("div", {
        className: "e-message-header-container"
      });
      var userHeader = this.createElement("div", {
        className: "e-message-header"
      });
      userHeader.innerHTML = msg.author.user;
      var timeSpan = this.getTimeStampElement(msg.timeStamp ? msg.timeStamp : /* @__PURE__ */ new Date(), msg.timeStampFormat ? msg.timeStampFormat : this.timeStampFormat);
      this.appendChildren(userHeaderContainer, userHeader, timeSpan);
      this.insertBeforeChildren(messageGroup, userHeaderContainer);
    };
    ChatUI2.prototype.getInitials = function(name) {
      var nameParts = name.split(" ");
      var initials = nameParts.length > 1 ? "" + nameParts[0][0] + nameParts[nameParts.length - 1][0] : name[0];
      return initials;
    };
    ChatUI2.prototype.createAvatarIcon = function(author, isTypingUser) {
      var userName = author.user.trim();
      var initials = this.getInitials(userName);
      var iconClassName = !isTypingUser ? "e-message-icon" : "e-user-icon";
      var avatarIcon;
      if (iconClassName === "e-message-icon") {
        avatarIcon = this.createElement("span", { className: " e-message-icon " + author.cssClass });
        if (!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== "") {
          var imgElement = this.createElement("img", {
            attrs: { src: author.avatarUrl, alt: "Avatar" }
          });
          avatarIcon.appendChild(imgElement);
        }
      } else {
        avatarIcon = this.createElement(!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== "" ? "img" : "span", { className: " e-user-icon " + author.cssClass });
      }
      if (author.avatarBgColor) {
        avatarIcon.style.backgroundColor = author.avatarBgColor;
      }
      if (!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== "") {
        avatarIcon.src = author.avatarUrl;
        avatarIcon.alt = userName;
      } else {
        avatarIcon.innerHTML = initials;
      }
      if (author.statusIconCss && !isTypingUser) {
        avatarIcon.appendChild(this.chatStatus(author.statusIconCss));
      }
      return avatarIcon;
    };
    ChatUI2.prototype.chatStatus = function(statusIconCss) {
      var statusTitle;
      if (statusIconCss.includes("e-user-online")) {
        statusTitle = "Available";
      } else if (statusIconCss.includes("e-user-away")) {
        statusTitle = "Away";
      } else if (statusIconCss.includes("e-user-busy")) {
        statusTitle = "Busy";
      } else if (statusIconCss.includes("e-user-offline")) {
        statusTitle = "Offline";
      }
      return this.createElement("span", {
        className: "e-user-status-icon " + statusIconCss,
        attrs: {
          "title": statusTitle
        }
      });
    };
    ChatUI2.prototype.getTimeStampElement = function(timeStamp, timeStampFormat) {
      var formattedTime = this.getFormattedTime(timeStamp, timeStampFormat);
      return this.createElement("div", {
        className: "e-time",
        innerHTML: this.showTimeStamp ? formattedTime : ""
      });
    };
    ChatUI2.prototype.updateTimeFormats = function(timeStampFormat, fullTime, index) {
      if (this.messages[parseInt(index.toString(), 10)]) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.messages[parseInt(index.toString(), 10)].timeStamp = this.intl.parseDate(fullTime, { format: "dd/MM/yyyy hh:mm a" });
        this.messages[parseInt(index.toString(), 10)].timeStampFormat = timeStampFormat;
        this.isProtectedOnChange = prevOnChange;
      }
    };
    ChatUI2.prototype.getFormattedTime = function(timeStamp, timeStampFormat) {
      timeStamp = typeof timeStamp === "string" ? new Date(timeStamp) : timeStamp;
      return this.intl.formatDate(timeStamp, { format: this.getFormat(timeStampFormat) });
    };
    ChatUI2.prototype.getFormat = function(timeStampFormat) {
      var hasValue = !isNullOrUndefined(timeStampFormat) && timeStampFormat.length > 0;
      return hasValue ? timeStampFormat : !isNullOrUndefined(this.timeStampFormat) && this.timeStampFormat.length ? this.timeStampFormat : "dd/MM/yyyy hh:mm a";
    };
    ChatUI2.prototype.renderForwardElement = function(msg, textElement) {
      if (msg.isForwarded) {
        var forwardedIndicator = this.createElement("div", {
          className: "e-forwarded-indicator"
        });
        var forwardedMessage = this.createElement("div", {
          className: "e-forward-message",
          innerHTML: this.l10n.getConstant("forwarded")
        });
        var forwardIcon = this.createElement("span", { className: "e-icons e-chat-forward" });
        this.appendChildren(forwardedIndicator, forwardIcon, forwardedMessage);
        textElement.prepend(forwardedIndicator);
      }
    };
    ChatUI2.prototype.getMessageText = function(msg) {
      var mentionedUsers = msg.mentionUsers;
      if (!isNullOrUndefined(mentionedUsers) && mentionedUsers.length > 0) {
        var placeholderRegex = /\{(-?\d+)\}/g;
        var messageText = msg.text;
        var match = void 0;
        var placeholders = [];
        while ((match = placeholderRegex.exec(messageText)) !== null) {
          placeholders.push({
            fullMatch: match[0],
            index: parseInt(match[1], 10)
          });
        }
        for (var _i = 0, placeholders_1 = placeholders; _i < placeholders_1.length; _i++) {
          var placeholder = placeholders_1[_i];
          var userIndex = placeholder.index;
          if (userIndex < mentionedUsers.length || mentionedUsers.length + userIndex < mentionedUsers.length) {
            var user = mentionedUsers[parseInt(userIndex.toString(), 10)];
            if (user) {
              messageText = messageText.replace(placeholder.fullMatch, this.getMentionChipElement(user));
            }
          }
        }
        return SanitizeHtmlHelper.sanitize(messageText);
      }
      return SanitizeHtmlHelper.sanitize(msg.text);
    };
    ChatUI2.prototype.getMentionChipElement = function(user) {
      var mentionChip = this.createElement("span", { className: "e-mention-chip" });
      var mentionDisplayEle = this.createElement("span", { className: "e-chat-mention-user-chip", innerHTML: user.user });
      mentionDisplayEle.setAttribute("data-user-id", user.id);
      mentionChip.append(mentionDisplayEle);
      return mentionChip.outerHTML;
    };
    ChatUI2.prototype.addGroupItems = function(msg, messageGroup, isUserTimeStampRendered, showStatus, index, loadOldChat) {
      var messageItem = this.createElement("div", { className: "e-message-item", id: "" + msg.id });
      var messageStatusWrapper = this.createElement("div", { className: "e-status-wrapper" });
      var timeSpan = this.getTimeStampElement(msg.timeStamp ? msg.timeStamp : /* @__PURE__ */ new Date(), msg.timeStampFormat ? msg.timeStampFormat : this.timeStampFormat);
      var messageContent = this.createElement("div", { className: "e-message-content" });
      var textElement = this.createElement("div", {
        className: "e-text",
        innerHTML: this.getMessageText(msg)
      });
      if (this.hasAttachment(msg)) {
        var fileElement = this.createAttachmentContent(msg);
        messageContent.appendChild(fileElement);
      }
      if (!isNullOrUndefined(textElement) && textElement.innerHTML !== "") {
        messageContent.appendChild(textElement);
      }
      this.updateForwardAndReplyElement(msg, messageContent);
      if (this.messageTemplate) {
        this.getContextObject("messageTemplate", messageItem, index, msg);
      } else {
        if (!isUserTimeStampRendered) {
          messageItem.appendChild(timeSpan);
        }
        if (showStatus) {
          var messageElement = this.createElement("div", { className: "e-status-item" });
          var statusIcon = this.createElement("span", { attrs: { class: "e-status-icon " + (msg.status ? msg.status.iconCss : ""), title: "" + (msg.status ? msg.status.tooltip : "") } });
          var statusText = this.createElement("div", { innerHTML: msg.status ? msg.status.text : "", className: "e-status-text" });
          this.appendChildren(messageElement, messageContent, statusIcon);
          this.appendChildren(messageStatusWrapper, messageElement, statusText);
          messageItem.appendChild(messageStatusWrapper);
        } else {
          messageItem.appendChild(messageContent);
        }
      }
      this.manageChatContent(loadOldChat, messageGroup, messageItem);
      var toolbarEle = this.renderChatMessageToolbar(messageItem, msg);
      this.wireMessageToolbarEvents(messageItem, toolbarEle);
      messageItem.prepend(toolbarEle);
    };
    ChatUI2.prototype.createAttachmentContent = function(msg) {
      var _this = this;
      var fileElement = this.createElement("div", {
        className: "e-attached-file"
      });
      var file = msg.attachedFile;
      var wrapper;
      if (this.isImageFile(file.rawFile)) {
        wrapper = this.createElement("div", {
          className: "e-image-wrapper"
        });
        wrapper.appendChild(this.createImageContent(file, "e-image"));
        fileElement.appendChild(wrapper);
      } else if (this.isVideoFile(file.rawFile)) {
        wrapper = this.createVideoContent(file);
        fileElement.appendChild(wrapper);
      } else {
        wrapper = this.createFileItem(msg.attachedFile, false);
        fileElement.appendChild(wrapper);
      }
      EventHandler.add(fileElement, "click", function() {
        return _this.handleAttachmentPreview(file, true);
      });
      return fileElement;
    };
    ChatUI2.prototype.createVideoContent = function(file) {
      var videoWrapper = this.createElement("div", {
        className: "e-video-wrapper"
      });
      var videoElement = this.createElement("video", {
        attrs: {
          disablepictureinpicture: "true",
          playsinline: "true",
          preload: "metadata",
          title: file.name
        },
        className: "e-video"
      });
      var source = this.createElement("source", {
        attrs: {
          src: file.fileSource,
          type: file.rawFile.type
        }
      });
      videoElement.appendChild(source);
      var playIconWrapper = this.createElement("div", {
        className: "e-play-icon-wrapper"
      });
      var playButton = this.createElement("span", {
        className: "e-chat-video-play e-icons",
        attrs: {
          role: "button",
          tabindex: "0",
          "aria-label": "Play video",
          title: "Play"
        }
      });
      playIconWrapper.appendChild(playButton);
      videoWrapper.appendChild(videoElement);
      videoWrapper.appendChild(playIconWrapper);
      return videoWrapper;
    };
    ChatUI2.prototype.updateForwardAndReplyElement = function(msg, messageContent) {
      if (!msg.isForwarded) {
        var replyElement = this.renderReplyElement(msg, false);
        if (replyElement) {
          messageContent.prepend(replyElement);
        }
      } else {
        this.renderForwardElement(msg, messageContent);
      }
    };
    ChatUI2.prototype.manageChatContent = function(loadOldChat, parentItem, ChildItem) {
      if (loadOldChat) {
        parentItem.prepend(ChildItem);
      } else {
        parentItem.appendChild(ChildItem);
      }
    };
    ChatUI2.prototype.createTimebreakElement = function(date) {
      var timebreakDiv = this.createElement("div", { className: "e-timebreak " + (this.timeBreakTemplate ? "e-timebreak-template" : "") });
      var formattedTime = this.getFormattedTime(date, "MMMM d, yyyy");
      if (this.timeBreakTemplate) {
        this.getContextObject("timeBreakTemplate", timebreakDiv, null, null, date);
      } else {
        var timeStampEle = this.createElement("span", { className: "e-timestamp" });
        timeStampEle.innerHTML = formattedTime;
        timebreakDiv.appendChild(timeStampEle);
      }
      return timebreakDiv;
    };
    ChatUI2.prototype.handleTimeBreak = function(lastMsgIndex, index, loadOldChat) {
      if (!this.showTimeBreak) {
        return;
      }
      var currentMessageDate = this.getMessageDate(index);
      currentMessageDate.setHours(0, 0, 0, 0);
      if (lastMsgIndex === -1) {
        this.messageWrapper.appendChild(this.createTimebreakElement(currentMessageDate));
      } else if (index > 0) {
        var lastMessageDate = this.getMessageDate(lastMsgIndex);
        lastMessageDate.setHours(0, 0, 0, 0);
        if (currentMessageDate.getTime() !== lastMessageDate.getTime() && !loadOldChat) {
          this.messageWrapper.appendChild(this.createTimebreakElement(currentMessageDate));
        }
      }
    };
    ChatUI2.prototype.renderNewMessage = function(msg, index) {
      if (this.isEmptyChatTemplateRendered) {
        var introContainer = this.messageWrapper.querySelector(".e-empty-chat-template");
        this.messageWrapper.removeChild(introContainer);
        this.isEmptyChatTemplateRendered = false;
      }
      this.renderGroup(this.messageWrapper, msg, false, index, index - 1);
    };
    ChatUI2.prototype.loadMoreMessages = function() {
      var _this = this;
      if (this.startIndex <= 0) {
        return;
      }
      var currentScrollOffset = this.messageWrapper.scrollHeight - this.messageWrapper.scrollTop;
      showSpinner(this.messageWrapper);
      setTimeout(function() {
        hideSpinner(_this.messageWrapper);
        _this.loadBatch();
        _this.messageWrapper.scrollTop = _this.messageWrapper.scrollHeight - currentScrollOffset;
      }, 1e3);
    };
    ChatUI2.prototype.updateMessageTimeFormats = function(msg, index) {
      var fullTime = this.getFormattedTime(msg.timeStamp ? msg.timeStamp : /* @__PURE__ */ new Date(), "dd/MM/yyyy hh:mm a");
      this.updateTimeFormats(msg.timeStampFormat, fullTime, index);
    };
    ChatUI2.prototype.getMessageDate = function(index) {
      return new Date(this.messages[parseInt(index.toString(), 10)].timeStamp);
    };
    ChatUI2.prototype.renderChatSuggestionsElement = function() {
      if (!isNullOrUndefined(this.suggestions) && this.suggestions.length > 0) {
        this.renderSuggestions(this.suggestions, null, this.suggestionTemplate, "suggestion", "suggestionTemplate", this.onSuggestionClick);
      }
    };
    ChatUI2.prototype.handleSuggestionUpdate = function() {
      if (this.suggestionsElement) {
        this.suggestionsElement.remove();
      }
      if (!isNullOrUndefined(this.suggestions) && this.suggestions.length > 0) {
        this.renderSuggestions(this.suggestions, null, this.suggestionTemplate, "suggestion", "suggestionTemplate", this.onSuggestionClick);
      }
      this.toggleScrollIcon();
    };
    ChatUI2.prototype.onSuggestionClick = function(e) {
      this.suggestionsElement.hidden = true;
      this.editableTextarea.innerText = e.target.innerText;
      this.onSendIconClick(e);
    };
    ChatUI2.prototype.renderChatFooterContent = function() {
      this.getFooter();
      var footerClass = "e-footer " + (this.footerTemplate ? "e-footer-template" : "");
      this.footer.className = footerClass;
      this.renderChatFooter();
      this.viewWrapper.append(this.footer);
      this.updateFooter(this.showFooter, this.footer);
    };
    ChatUI2.prototype.renderChatFooter = function() {
      this.renderFooterContent(this.footerTemplate, "", this.placeholder, false, "e-chat-textarea");
      var sendIconClass = "e-chat-send e-icons disabled";
      if (!this.footerTemplate) {
        this.renderFooterIcons(sendIconClass, false, "");
        var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
        if (footerIconsWrapper) {
          this.sendIcon.setAttribute("title", this.l10n.getConstant("send"));
          this.updateAttachmentElement(footerIconsWrapper);
        }
        this.refreshTextareaUI();
        this.pushToUndoStack(this.editableTextarea.innerText);
        this.updateMentionObj();
      }
    };
    ChatUI2.prototype.getMentionDataSource = function(mentionUsers) {
      var _this = this;
      var dataSource = mentionUsers.map(function(user) {
        var name = user.user.trim();
        var initials = _this.getInitials(name);
        return {
          id: user.id,
          user: name,
          avatarUrl: user.avatarUrl || "",
          avatarBgColor: user.avatarBgColor || "",
          cssClass: user.cssClass || "",
          statusIconCss: user.statusIconCss || "",
          initials
        };
      });
      return dataSource;
    };
    ChatUI2.prototype.initializeMention = function() {
      var dataSource = this.getMentionDataSource(this.mentionUsers);
      var cssClass = "e-chat-mention";
      if (this.enableRtl) {
        cssClass += " e-rtl";
      }
      if (dataSource.length > 0) {
        this.mentionObj = new Mention({
          dataSource,
          cssClass,
          requireLeadingSpace: false,
          suffixText: "&nbsp;",
          noRecordsTemplate: this.l10n.getConstant("noRecordsTemplate"),
          fields: { text: "user", value: "id" },
          popupWidth: "250px",
          popupHeight: "200px",
          allowSpaces: true,
          mentionChar: this.mentionTriggerChar,
          displayTemplate: '<span class="e-chat-mention-user-chip" data-user-id="${id}">${user}</span>',
          itemTemplate: '<div class="e-chat-mention-item-template"><span class="e-chat-mention-user-icon ${cssClass}" style="background-color: ${avatarBgColor};">${if(avatarUrl)} <img src="${avatarUrl}" alt="${user}" class="em-img" /> ${else}${initials}${/if} </span><div class="e-chat-mention-user-name">${user}</div></div>',
          select: this.onMentionSelect.bind(this)
        }, this.editableTextarea);
      }
    };
    ChatUI2.prototype.onMentionSelect = function(args) {
      var eventArgs = {
        cancel: false,
        event: args.e,
        isInteracted: args.isInteracted,
        itemData: args.itemData
      };
      this.trigger("mentionSelect", eventArgs);
      args.cancel = eventArgs.cancel;
      this.activateSendIcon(this.editableTextarea.innerText.length);
    };
    ChatUI2.prototype.hasAttachment = function(message) {
      return message.attachedFile !== void 0 && message.attachedFile !== null;
    };
    ChatUI2.prototype.isImageFile = function(file) {
      if (!file) {
        return false;
      }
      return file.type && typeof file.type === "string" && file.type.startsWith("image/");
    };
    ChatUI2.prototype.isVideoFile = function(file) {
      if (!file) {
        return false;
      }
      return file.type && typeof file.type === "string" && file.type.startsWith("video/");
    };
    ChatUI2.prototype.updateAttachmentElement = function(footerIconsWrapper) {
      if (this.enableAttachments) {
        this.renderAttachmentIcon(footerIconsWrapper);
      } else {
        if (this.uploaderObj) {
          this.uploaderObj.destroy();
          EventHandler.remove(this.attachmentIcon, "keydown", this.triggerUploaderAction);
          this.attachmentIcon.innerHTML = "";
          this.dropArea.innerHTML = "";
          this.attachmentIcon.remove();
          remove(this.dropArea);
        }
        this.removeFilesPreview();
      }
    };
    ChatUI2.prototype.renderAttachmentIcon = function(footerIconsWrapper) {
      var _this = this;
      this.dropArea = this.createElement("div", { attrs: { class: "e-chat-drop-area" } });
      this.footer.prepend(this.dropArea);
      this.attachmentIcon = this.createElement("span", { attrs: { class: "e-chat-attachment-icon e-icons", role: "button", "aria-label": "Attach files", tabindex: "0", title: this.l10n.getConstant("attachments") } });
      var uploaderElement = this.createElement("input", { attrs: { class: "e-chat-file-upload", type: "file", name: "UploadFiles", id: "fileUpload" } });
      var dropAreaTarget;
      if (this.attachmentSettings.enableDragAndDrop) {
        dropAreaTarget = this.footer;
      }
      this.uploaderObj = new Uploader({
        asyncSettings: {
          saveUrl: this.attachmentSettings.saveUrl,
          removeUrl: this.attachmentSettings.removeUrl
        },
        maxFileSize: this.attachmentSettings.maxFileSize,
        allowedExtensions: this.attachmentSettings.allowedFileTypes,
        success: this.onUploadSuccess.bind(this),
        failure: this.onUploadFailure.bind(this),
        uploading: this.onUploadStart.bind(this),
        progress: this.onUploadProgress.bind(this),
        multiple: true,
        dropArea: dropAreaTarget,
        selected: function(args) {
          if (args.filesData.some(function(file) {
            return file.status === _this.uploaderObj.l10n.getConstant("invalidFileType");
          })) {
            args.cancel = true;
            return;
          }
          var totalSelected = args.filesData.length + _this.uploadedFiles.length;
          if (totalSelected > _this.attachmentSettings.maximumCount) {
            args.cancel = true;
            _this.showFailureAlert("fileCountFailure", _this.attachmentSettings.maximumCount, "e-count-failure");
            uploaderElement.value = "";
            return;
          }
          var oversized = args.filesData.filter(function(file) {
            return file.status === _this.uploaderObj.l10n.getConstant("invalidMaxFileSize") && file.statusCode === "0";
          });
          if (oversized.length) {
            _this.showFailureAlert("fileSizeFailure", oversized.length, "e-size-failure");
            uploaderElement.value = "";
          }
          _this.handleFileSelection(args);
        }
      });
      this.attachmentIcon.appendChild(uploaderElement);
      this.uploaderObj.appendTo(uploaderElement);
      this.attachmentIcon.addEventListener("click", function() {
        return uploaderElement.click();
      });
      footerIconsWrapper.prepend(this.attachmentIcon);
      EventHandler.add(this.attachmentIcon, "keydown", this.triggerUploaderAction, this);
    };
    ChatUI2.prototype.triggerUploaderAction = function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        var uploaderElement = this.footer.querySelector(".e-chat-file-upload");
        if (uploaderElement) {
          uploaderElement.click();
        }
      }
    };
    ChatUI2.prototype.showFailureAlert = function(localeConstantKey, fileCount, failureType) {
      var failureMessage = this.l10n.getConstant(localeConstantKey).replace("{0}", fileCount.toString());
      if (fileCount === 1) {
        failureMessage = failureMessage.replace("files", "file");
      }
      this.createFailureAlert(failureMessage, failureType);
    };
    ChatUI2.prototype.createFailureAlert = function(failureMessage, failureType) {
      var _this = this;
      var failureAlert = this.renderFailureAlert(this.viewWrapper, failureMessage, failureType, "e-chat-circle-close", "e-chat-close");
      if (this.viewWrapper.contains(this.footer)) {
        this.viewWrapper.insertBefore(failureAlert, this.footer);
      }
      failureAlert.classList.add("e-show");
      setTimeout(function() {
        _this.handleFailureAlertRemove(_this.viewWrapper, failureAlert);
      }, 3e3);
    };
    ChatUI2.prototype.handleFileSelection = function(args) {
      return __awaiter(this, void 0, void 0, function() {
        var _i, _a, fileData, file, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              _i = 0, _a = args.filesData;
              _c.label = 1;
            case 1:
              if (!(_i < _a.length)) return [3, 6];
              fileData = _a[_i];
              file = fileData.rawFile;
              if (!this.attachmentSettings.path) return [3, 2];
              fileData.fileSource = this.attachmentSettings.path + "/" + fileData.name;
              return [3, 5];
            case 2:
              if (!(this.attachmentSettings.saveFormat === "Base64")) return [3, 4];
              _b = fileData;
              return [4, this.readFileAsBase64(file)];
            case 3:
              _b.fileSource = _c.sent();
              return [3, 5];
            case 4:
              fileData.fileSource = URL.createObjectURL(file);
              _c.label = 5;
            case 5:
              _i++;
              return [3, 1];
            case 6:
              this.element.querySelector("#fileUpload").value = "";
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ChatUI2.prototype.readFileAsBase64 = function(file) {
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
          return resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };
    ChatUI2.prototype.onUploadStart = function(args) {
      this.trigger("beforeAttachmentUpload", args);
      this.uploadedFiles.push(args.fileData);
      var fileItem = this.createFileItem(args.fileData, true);
      this.dropArea.appendChild(fileItem);
    };
    ChatUI2.prototype.onUploadProgress = function(args) {
      var uploadProgress = args.e.loaded / args.e.total * 100;
      var progressFill = this.element.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
      if (progressFill) {
        progressFill.style.width = uploadProgress + "%";
      }
    };
    ChatUI2.prototype.onUploadSuccess = function(args) {
      if (args.operation === "upload") {
        this.trigger("attachmentUploadSuccess", args);
        var progressFill = this.element.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
          progressFill.style.width = "100%";
          this.cleanupFileItem(args.file.name);
        }
        var progressBar = this.element.querySelector(".e-chat-progress-fill");
        if (!progressBar) {
          this.activateSendIcon(1);
        }
      } else if (args.operation === "remove") {
        this.trigger("attachmentRemoved", args);
      }
    };
    ChatUI2.prototype.cleanupFileItem = function(fileName) {
      var fileItem = this.element.querySelector("#e-chat-progress-" + CSS.escape(fileName));
      if (fileItem) {
        fileItem.parentElement.remove();
      }
    };
    ChatUI2.prototype.onUploadFailure = function(args) {
      if (args.operation === "remove") {
        this.trigger("attachmentRemoved", args);
      } else {
        this.trigger("attachmentUploadFailure", args);
        this.uploaderObj.remove(args.file);
        this.uploadedFiles = this.uploadedFiles.filter(function(file) {
          return file.name !== args.file.name;
        });
        var progressFill = this.footer.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
          progressFill.style.width = "100%";
          progressFill.classList.add("e-chat-upload-failed");
        }
      }
    };
    ChatUI2.prototype.createFileItem = function(fileData, isForFooter) {
      var _this = this;
      var fileItem = this.createElement("div", { className: isForFooter ? "e-chat-uploaded-file-item" : "e-file-wrapper" });
      if (this.attachmentSettings.attachmentTemplate && isForFooter) {
        var introContainer = this.createElement("div", { className: "e-attachment-template" });
        fileItem.appendChild(introContainer);
        this.getContextObject("attachmenttemplate", introContainer, null, null, null, fileData);
      } else {
        var fileIcon = this.createElement("div", { className: "e-icons e-chat-file-icon" });
        var fileDetails = this.createElement("div", { className: "e-chat-file-details" });
        var fileName = this.createElement("span", { className: "e-chat-file-name", innerHTML: fileData.name });
        var fileSize = this.createElement("span", { className: "e-chat-file-size", innerHTML: (fileData.size / 1024).toFixed(2) + " KB" });
        fileDetails.append(fileName, fileSize);
        fileItem.append(fileIcon, fileDetails);
      }
      if (isForFooter) {
        var closeButton_1 = this.createElement("span", { attrs: { class: "e-icons e-chat-close", role: "button", "aria-label": "Clear file", tabindex: "-1" } });
        EventHandler.add(closeButton_1, "click", function() {
          return _this.handleRemoveUploadedFile(closeButton_1, fileData, fileItem);
        });
        fileItem.append(closeButton_1);
        var progressBar = this.createElement("div", { className: "e-chat-progress-bar" });
        var progressFill = this.createElement("div", { id: "e-chat-progress-" + fileData.name, className: "e-chat-progress-fill" });
        progressBar.appendChild(progressFill);
        fileItem.append(progressBar);
        EventHandler.add(fileItem, "click", function(event2) {
          if (closeButton_1 && (event2.target === closeButton_1 || event2.target.classList.contains("e-chat-close"))) {
            return;
          }
          _this.handleAttachmentPreview(fileData, false);
        });
      }
      return fileItem;
    };
    ChatUI2.prototype.handleRemoveUploadedFile = function(closeButton, fileData, fileItem) {
      this.uploaderObj.remove(fileData);
      this.uploadedFiles = this.uploadedFiles.filter(function(file) {
        return file.name !== fileData.name;
      });
      EventHandler.remove(closeButton, "click", this.handleRemoveUploadedFile);
      fileItem.remove();
      var textLength = this.editableTextarea.innerText.length;
      var totalLength = textLength + this.uploadedFiles.length;
      this.activateSendIcon(totalLength);
    };
    ChatUI2.prototype.handleAttachmentPreview = function(file, isAfterPreview) {
      var eventArgs = { cancel: false };
      if (this.attachmentSettings.attachmentClick) {
        this.attachmentSettings.attachmentClick.call(this, eventArgs);
      } else if (!eventArgs.cancel) {
        this.showMediaPreview(file, isAfterPreview);
      }
    };
    ChatUI2.prototype.getFilePreview = function(file) {
      var sizeInKB = file.size / 1024;
      var sizeDisplay = sizeInKB < 1024 ? sizeInKB.toFixed(2) + " KB" : (sizeInKB / 1024).toFixed(2) + " MB";
      var filePreview = this.createElement("div", {
        className: "e-file-preview"
      });
      var fileIcon = this.createElement("span", {
        className: "e-icons e-file-document"
      });
      var previewText = this.createElement("div", {
        className: "e-preview-file-text",
        innerHTML: this.l10n.getConstant("filePreview")
      });
      var filedetails = this.createElement("div", {
        className: "e-file-details",
        innerHTML: "" + file.type + " - " + sizeDisplay
      });
      this.appendChildren(filePreview, fileIcon, previewText, filedetails);
      return filePreview;
    };
    ChatUI2.prototype.removeFilesPreview = function() {
      var previewWrapper = this.messageWrapper.querySelector(".e-preview-overlay");
      if (previewWrapper) {
        previewWrapper.remove();
      }
    };
    ChatUI2.prototype.renderPreviewTemplate = function(selectedFile, isAfterPreview) {
      var introContainer = this.createElement("div", { className: "e-preview-template" });
      var fileIndex;
      if (isAfterPreview) {
        fileIndex = this.messages.findIndex(function(msg) {
          return msg.attachedFile === selectedFile;
        });
      } else {
        fileIndex = Array.isArray(this.uploadedFiles) && selectedFile ? this.uploadedFiles.findIndex(function(fileData) {
          return fileData.id === selectedFile.id;
        }) : -1;
      }
      this.getContextObject("previewtemplate", introContainer, fileIndex, null, null, selectedFile);
      return introContainer;
    };
    ChatUI2.prototype.showMediaPreview = function(file, isAfterPreview) {
      var previewOverlay = this.createElement("div", {
        className: "e-preview-overlay",
        attrs: {
          tabindex: "0"
        }
      });
      var previewHeader = this.createElement("div", {
        className: "e-preview-header"
      });
      var closeButton = this.createElement("span", {
        className: "e-chat-back-icon e-icons",
        attrs: {
          title: this.l10n.getConstant("close")
        }
      });
      previewHeader.appendChild(closeButton);
      var fileNameLabel = this.createElement("span", {
        className: "e-preview-file-name",
        innerHTML: file.name
      });
      previewHeader.appendChild(fileNameLabel);
      if (isAfterPreview) {
        var downloadButton = this.createElement("a", {
          className: "e-chat-download e-icons",
          attrs: {
            href: file.fileSource,
            download: file.name,
            target: "_blank",
            title: this.l10n.getConstant("download")
          }
        });
        previewHeader.appendChild(downloadButton);
      }
      var previewContent;
      if (this.attachmentSettings.previewTemplate) {
        previewContent = this.renderPreviewTemplate(file, isAfterPreview);
      } else {
        if (this.isImageFile(file.rawFile)) {
          previewContent = this.createImageContent(file, "e-image-preview");
        } else if (this.isVideoFile(file.rawFile)) {
          previewContent = this.createElement("video", {
            attrs: {
              autoplay: "true",
              muted: "true",
              controls: "true",
              controlsList: "nodownload noplaybackrate",
              disablepictureinpicture: "true",
              preload: "metadata",
              title: file.name
            },
            className: "e-video-preview"
          });
          var source = this.createElement("source", {
            attrs: {
              src: file.fileSource,
              type: file.rawFile.type
            }
          });
          previewContent.appendChild(source);
        } else {
          previewContent = this.getFilePreview(file);
        }
      }
      this.appendChildren(previewOverlay, previewHeader, previewContent);
      this.messageWrapper.appendChild(previewOverlay);
      previewOverlay.focus();
      var escKeyHandler = function(event2) {
        if (event2.key === "Escape") {
          closePreview();
        }
      };
      var overlayClickHandler = function(event2) {
        if (event2.currentTarget === event2.target) {
          closePreview();
        }
      };
      var closeClickHandler = function() {
        closePreview();
      };
      var closePreview = function() {
        EventHandler.remove(previewOverlay, "keydown", escKeyHandler);
        EventHandler.remove(previewOverlay, "click", overlayClickHandler);
        EventHandler.remove(closeButton, "click", closeClickHandler);
        previewOverlay.remove();
      };
      EventHandler.add(previewOverlay, "keydown", escKeyHandler);
      EventHandler.add(previewOverlay, "click", overlayClickHandler);
      EventHandler.add(closeButton, "click", closeClickHandler);
    };
    ChatUI2.prototype.createImageContent = function(file, imageClass) {
      var imageElement = this.createElement("img", {
        attrs: {
          src: file.fileSource,
          alt: file.name
        },
        className: imageClass
      });
      return imageElement;
    };
    ChatUI2.prototype.updateAttachmentSettings = function(newAttachment) {
      this.removeFilesPreview();
      this.uploaderObj.allowedExtensions = !isNullOrUndefined(newAttachment.allowedFileTypes) ? newAttachment.allowedFileTypes : this.attachmentSettings.allowedFileTypes;
      this.uploaderObj.maxFileSize = !isNullOrUndefined(newAttachment.maxFileSize) ? newAttachment.maxFileSize : this.attachmentSettings.maxFileSize;
      this.uploaderObj.asyncSettings = {
        saveUrl: !isNullOrUndefined(newAttachment.saveUrl) ? newAttachment.saveUrl : this.attachmentSettings.saveUrl,
        removeUrl: !isNullOrUndefined(newAttachment.removeUrl) ? newAttachment.removeUrl : this.attachmentSettings.removeUrl
      };
      if (!isNullOrUndefined(newAttachment.path)) {
        this.attachmentSettings.path = newAttachment.path;
      }
      if (!isNullOrUndefined(newAttachment.enableDragAndDrop)) {
        this.attachmentSettings.enableDragAndDrop = newAttachment.enableDragAndDrop;
      }
      this.uploaderObj.dropArea = this.attachmentSettings.enableDragAndDrop ? this.footer : "";
      if (!isNullOrUndefined(newAttachment.saveFormat)) {
        if (newAttachment.saveFormat === "Base64" || newAttachment.saveFormat === "Blob") {
          this.attachmentSettings.saveFormat = newAttachment.saveFormat;
        }
      }
      if (!isNullOrUndefined(newAttachment.maximumCount)) {
        this.attachmentSettings.maximumCount = newAttachment.maximumCount;
      }
    };
    ChatUI2.prototype.clearUploadedFiles = function() {
      this.uploadedFiles = [];
      if (this.dropArea) {
        this.dropArea.innerHTML = "";
      }
      this.refreshTextareaUI();
    };
    ChatUI2.prototype.refreshTextareaUI = function() {
      var textLength = this.editableTextarea.innerText.length;
      var previewCount = this.uploadedFiles && this.uploadedFiles.length ? this.uploadedFiles.length : 0;
      var totalContent = textLength + previewCount;
      this.updateHiddenTextarea(this.editableTextarea.innerText);
      this.activateSendIcon(totalContent);
      this.updateFooterElementClass();
    };
    ChatUI2.prototype.handleInput = function(event2) {
      var textareaEle = event2.target;
      var isEmpty = textareaEle.innerHTML === "<br>";
      if (isEmpty) {
        this.clearBreakTags(textareaEle);
      }
      var textContent = textareaEle.innerText;
      this.refreshTextareaUI();
      this.editableTextarea.focus();
      this.scheduleUndoPush();
      this.redoStack = [];
      this.triggerUserTyping(event2, textContent);
    };
    ChatUI2.prototype.onFocusEditableTextarea = function() {
      if (this.footer) {
        this.footer.classList.add("e-footer-focused");
      }
    };
    ChatUI2.prototype.onBlurEditableTextarea = function(e) {
      if (this.footer) {
        this.footer.classList.remove("e-footer-focused");
      }
      this.triggerUserTyping(e, e.target.innerText);
    };
    ChatUI2.prototype.triggerUserTyping = function(event2, value) {
      var eventArgs = {
        event: event2,
        message: value,
        user: this.user,
        isTyping: event2.type === "blur" ? false : value.length > 0 ? true : false
      };
      this.trigger("userTyping", eventArgs);
    };
    ChatUI2.prototype.renderTypingIndicator = function() {
      var _this = this;
      if (this.indicatorWrapper) {
        this.indicatorWrapper.remove();
      }
      if (!this.typingUsers || this.typingUsers.length === 0) {
        return;
      }
      this.indicatorWrapper = this.createElement("div", {
        className: "e-typing-indicator " + (this.typingUsersTemplate ? "e-typing-indicator-template" : "")
      });
      if (this.typingUsersTemplate) {
        this.getContextObject("typingUsersTemplate", this.indicatorWrapper, null, null, null);
      } else {
        this.typingUsers.slice(0, 3).forEach(function(user) {
          var avatarElement = _this.createAvatarIcon(user, true);
          _this.indicatorWrapper.appendChild(avatarElement);
        });
        var typingMessage = this.createElement("span", { className: "e-user-text" });
        this.indicatorWrapper.appendChild(typingMessage);
        this.updateUserText();
        var indicatorContainer = this.createElement("div", { className: "e-indicator-wrapper" });
        for (var i = 0; i < 3; i++) {
          var indicator = this.createElement("span", {
            className: "e-indicator"
          });
          this.appendChildren(indicatorContainer, indicator);
        }
        this.indicatorWrapper.appendChild(indicatorContainer);
      }
      this.content.prepend(this.indicatorWrapper);
    };
    ChatUI2.prototype.updateUserText = function() {
      var _this = this;
      if (this.typingUsersTemplate) {
        return;
      }
      var userNames = this.typingUsers.filter(function(user) {
        return user.user !== _this.user.user;
      }).map(function(user) {
        return user.user;
      });
      var displayText = this.getTypingMessage(userNames);
      var typingMessage = this.indicatorWrapper.querySelector(".e-user-text");
      typingMessage.innerHTML = displayText;
    };
    ChatUI2.prototype.getTypingMessage = function(userNames) {
      if (userNames.length >= 3) {
        return this.l10n.getConstant(userNames.length > 3 ? "multipleUsersTyping" : "threeUserTyping").replace("{0}", userNames[0].toString()).replace("{1}", userNames[1].toString()).replace("{2}", (userNames.length - 2).toString());
      } else {
        var userTemplate = this.l10n.getConstant(userNames.length === 2 ? "twoUserTyping" : "oneUserTyping");
        return userNames.length === 2 ? userTemplate.replace("{0}", userNames[0].toString()).replace("{1}", userNames[1].toString()) : userTemplate.replace("{0}", userNames[0].toString());
      }
    };
    ChatUI2.prototype.updateTypingUsers = function(users) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.typingUsers = users;
      this.isProtectedOnChange = prevOnChange;
      this.renderTypingIndicator();
    };
    ChatUI2.prototype.updateHeaderIcon = function() {
      var existingIconElement = this.element.querySelector(".e-header-icon");
      if (existingIconElement) {
        existingIconElement.className = "e-header-icon e-icons " + this.headerIconCss;
      } else {
        var headerContainer = this.element.querySelector(".e-header");
        if (headerContainer) {
          var iconElement = this.createElement("span", {
            className: "e-header-icon e-icons " + this.headerIconCss
          });
          headerContainer.prepend(iconElement);
        }
      }
    };
    ChatUI2.prototype.updateHeaderText = function() {
      if (this.headerText) {
        var headerTextEle = this.element.querySelector(".e-header-text");
        if (headerTextEle) {
          headerTextEle.innerHTML = this.headerText;
        }
      }
    };
    ChatUI2.prototype.renderUpdatedMessage = function() {
      this.messageWrapper.innerHTML = "";
      this.setChatMsgId();
      this.renderMessageGroup(this.messageWrapper);
      this.updateEmptyChatTemplate();
    };
    ChatUI2.prototype.getUserMentionFromContent = function() {
      var _this = this;
      var mentionChips = this.editableTextarea.querySelectorAll(".e-chat-mention-user-chip");
      var updatedMentionedUsers = [];
      mentionChips.forEach(function(chip) {
        var userId = chip.getAttribute("data-user-id");
        var mentionUser = _this.mentionUsers.find(function(user) {
          return user.id === userId;
        });
        if (mentionUser) {
          updatedMentionedUsers.push(mentionUser);
        } else {
          var mentionedUser = {
            id: userId,
            user: chip.textContent
          };
          updatedMentionedUsers.push(mentionedUser);
        }
      });
      return updatedMentionedUsers;
    };
    ChatUI2.prototype.onSendIconClick = function(event2) {
      var _this = this;
      if (this.editableTextarea && this.uploadedFiles.length === 0 && !this.editableTextarea.innerText.trim()) {
        return;
      }
      var repliedTO = this.currentReplyTo ? {
        user: this.currentReplyTo.author,
        text: this.currentReplyTo.text,
        timestamp: this.currentReplyTo.timeStamp,
        timestampFormat: this.currentReplyTo.timeStampFormat,
        messageID: this.currentReplyTo.id,
        mentionUsers: this.currentReplyTo.mentionUsers,
        attachedFile: this.currentReplyTo.attachedFile
      } : null;
      var messageText = this.replaceMentionChipsWithPlaceholders();
      var mentionUsers = this.getUserMentionFromContent();
      var prevOnChange = this.isProtectedOnChange;
      this.editableTextarea.innerText = "";
      this.clearReplyWrapper();
      this.refreshTextareaUI();
      this.pushToUndoStack(this.editableTextarea.innerText);
      this.triggerUserTyping(event2, "");
      if (this.uploadedFiles && this.uploadedFiles.length > 0) {
        var filesCount_1 = this.uploadedFiles.length;
        this.uploadedFiles.forEach(function(file, index) {
          var newMessageObj = {
            id: _this.element.id + "-message-" + (_this.messages.length + 1),
            author: _this.user,
            text: index === filesCount_1 - 1 ? messageText : "",
            mentionUsers: index === filesCount_1 - 1 ? mentionUsers : [],
            replyTo: index === filesCount_1 - 1 ? repliedTO : null,
            attachedFile: file
          };
          var eventArgs2 = {
            cancel: false,
            message: newMessageObj
          };
          _this.trigger("messageSend", eventArgs2, function(args) {
            if (args.cancel) {
              return;
            }
            newMessageObj = args.message;
            _this.isProtectedOnChange = true;
            _this.messages = _this.messages.concat([newMessageObj]);
            _this.isProtectedOnChange = prevOnChange;
            _this.renderNewMessage(newMessageObj, _this.messages.length - 1);
          });
        });
      } else {
        var newMessageObj_1 = {
          id: this.element.id + "-message-" + (this.messages.length + 1),
          author: this.user,
          text: messageText,
          mentionUsers,
          replyTo: repliedTO,
          attachedFile: null
        };
        var eventArgs = {
          cancel: false,
          message: newMessageObj_1
        };
        this.trigger("messageSend", eventArgs, function(args) {
          if (args.cancel) {
            return;
          }
          newMessageObj_1 = args.message;
          _this.isProtectedOnChange = true;
          _this.messages = _this.messages.concat([newMessageObj_1]);
          _this.isProtectedOnChange = prevOnChange;
          _this.renderNewMessage(newMessageObj_1, _this.messages.length - 1);
        });
      }
      if (this.suggestionsElement) {
        this.suggestionsElement.hidden = false;
      }
      this.updateScrollPosition(false, 5);
      this.clearUploadedFiles();
    };
    ChatUI2.prototype.replaceMentionChipsWithPlaceholders = function() {
      if (!this.editableTextarea.innerHTML) {
        return this.editableTextarea.innerHTML;
      }
      var tempEle = this.createElement("div");
      tempEle.innerHTML = this.editableTextarea.innerHTML;
      var mentionChips = tempEle.querySelectorAll("span.e-mention-chip");
      var mentionIndex = 0;
      mentionChips.forEach(function(chip) {
        var placeholder = document.createTextNode("{" + mentionIndex++ + "}");
        chip.replaceWith(placeholder);
      });
      return tempEle.innerHTML || "";
    };
    ChatUI2.prototype.clearReplyWrapper = function() {
      var replyWrapper = this.footer.querySelector(".e-reply-wrapper");
      if (replyWrapper) {
        var clearIcon = replyWrapper.querySelector(".e-chat-close.e-icons");
        EventHandler.remove(clearIcon, "click", this.clearReplyWrapper);
        this.footer.removeChild(replyWrapper);
        replyWrapper.remove();
      }
      this.currentReplyTo = null;
    };
    ChatUI2.prototype.getContextObject = function(templateName, contentElement, index, message, currentMessagedate, file) {
      var template;
      var context = {};
      switch (templateName.toLowerCase()) {
        case "messagetemplate": {
          template = this.messageTemplate;
          context = { message, index };
          break;
        }
        case "timebreaktemplate": {
          template = this.timeBreakTemplate;
          context = { messageDate: currentMessagedate };
          break;
        }
        case "typinguserstemplate": {
          template = this.typingUsersTemplate;
          context = { users: this.typingUsers };
          break;
        }
        case "previewtemplate": {
          template = this.attachmentSettings.previewTemplate;
          context = { selectedFile: file, index };
          break;
        }
        case "attachmenttemplate": {
          template = this.attachmentSettings.attachmentTemplate;
          context = { selectedFile: file };
          break;
        }
      }
      this.updateContent(template, contentElement, context, templateName);
    };
    ChatUI2.prototype.handleAutoScroll = function() {
      if (this.isScrollAtBottom) {
        this.updateScroll(this.messageWrapper);
      }
      if (this.autoScrollToBottom) {
        this.updateScroll(this.messageWrapper);
      }
      this.toggleScrollIcon();
    };
    ChatUI2.prototype.footerKeyHandler = function(e) {
      var targetElement = e.target;
      if (targetElement.classList.contains("e-chat-attachment-icon")) {
        return;
      }
      this.keyHandler(e, "footer");
    };
    ChatUI2.prototype.scrollBottomKeyHandler = function(e) {
      this.keyHandler(e, "scrollBottom");
    };
    ChatUI2.prototype.keyHandler = function(event2, value) {
      if (event2.key === "Enter" && !event2.shiftKey) {
        var mentionPopup = document.querySelector(".e-chat-mention.e-mention");
        if (mentionPopup && mentionPopup.classList.contains("e-popup-open")) {
          return;
        }
        switch (value) {
          case "footer":
            this.pushToUndoStack(this.editableTextarea.innerText);
            event2.preventDefault();
            this.onSendIconClick(event2);
            break;
          case "scrollBottom":
            this.scrollToBottom();
            break;
        }
      } else {
        this.handleUndoRedo(event2);
      }
    };
    ChatUI2.prototype.applyPromptChange = function(newState, oldState, event2) {
      this.editableTextarea.innerHTML = newState.content;
      this.refreshTextareaUI();
      this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
      this.triggerUserTyping(event2, oldState.content);
    };
    ChatUI2.prototype.updateFooter = function(showFooter, footerElement) {
      if (!showFooter) {
        footerElement.hidden = true;
      } else {
        footerElement.hidden = false;
      }
    };
    ChatUI2.prototype.handleScroll = function() {
      this.messageWrapper.querySelectorAll(".e-chat-message-toolbar.e-show").forEach(function(toolbar) {
        toolbar.classList.remove("e-show");
      });
      var atBottom = this.checkScrollAtBottom(this.messageWrapper, 0);
      if (atBottom) {
        this.toggleClassName(this.downArrowIcon.element, atBottom, "downArrow");
        var suggestionEle = this.element.querySelector(".e-suggestions");
        if (suggestionEle) {
          this.toggleClassName(suggestionEle, atBottom, "suggestion");
          if (!atBottom || !this.isScrollAtBottom) {
            this.updateScroll(this.messageWrapper);
          }
        }
      }
      if (this.loadOnDemand && this.messageWrapper.scrollTop === 0) {
        this.multiplier += this.multiplier;
        this.loadMoreMessages();
      }
      this.isScrollAtBottom = atBottom;
    };
    ChatUI2.prototype.toggleClassName = function(element, atBottom, name) {
      switch (name) {
        case "downArrow":
          element.classList.toggle("e-arrowdown-hide", atBottom);
          element.classList.toggle("e-arrowdown-show", !atBottom);
          break;
        case "suggestion":
          element.classList.toggle("e-show-suggestions", atBottom);
          element.classList.toggle("e-hide-suggestions", !atBottom);
          break;
        case "scroll":
          element.classList.toggle("e-scroll-smooth", !atBottom);
          break;
      }
    };
    ChatUI2.prototype.toggleScrollIcon = function() {
      var atBottom = this.checkScrollAtBottom(this.messageWrapper, 0);
      this.toggleClassName(this.downArrowIcon.element, atBottom, "downArrow");
      var suggestionEle = this.element.querySelector(".e-suggestions");
      if (suggestionEle) {
        this.toggleClassName(suggestionEle, atBottom, "suggestion");
        if (atBottom) {
          this.updateScroll(this.messageWrapper);
        }
      }
      this.isScrollAtBottom = atBottom;
    };
    ChatUI2.prototype.scrollBtnClick = function() {
      this.toggleClassName(this.messageWrapper, false, "scroll");
      this.scrollToBottom();
      this.toggleClassName(this.messageWrapper, true, "scroll");
    };
    ChatUI2.prototype.updateMessageItem = function(message, msgId) {
      if (message.author || message.timeStamp || this.messageTemplate) {
        this.renderUpdatedMessage();
        return;
      }
      var messageItem = this.messageWrapper.querySelector("#" + msgId);
      if (!messageItem) {
        return;
      }
      if (message.id) {
        messageItem.id = message.id;
      }
      var messageContent = messageItem.querySelector(".e-message-content");
      if (messageContent && message.text) {
        var textElement = messageItem.querySelector(".e-text");
        if (textElement) {
          textElement.innerHTML = this.getMessageText(message);
        }
        this.updateForwardAndReplyElement(message, messageContent);
      }
      if (message.status) {
        var statusTextElement = messageItem.querySelector(".e-status-text");
        if (statusTextElement && message.status.text) {
          statusTextElement.innerHTML = message.status.text;
        }
        var statusIconElement = messageItem.querySelector(".e-status-icon");
        if (statusIconElement && message.status.iconCss) {
          var iconCss = message.status.iconCss;
          statusIconElement.className = "e-status-icon " + iconCss;
          if (message.status.tooltip) {
            statusIconElement.title = message.status.tooltip;
          }
        }
      }
    };
    ChatUI2.prototype.updateMentionObj = function() {
      if (isNullOrUndefined(this.mentionObj)) {
        this.initializeMention();
      } else {
        if (this.mentionUsers.length > 0) {
          this.mentionObj.dataSource = this.getMentionDataSource(this.mentionUsers);
        } else {
          this.destroyAndNullify(this.mentionObj);
          this.mentionObj = null;
        }
      }
    };
    ChatUI2.prototype.updateLocale = function() {
      var _this = this;
      this.l10n.setLocale(this.locale);
      var messages = this.messageWrapper.querySelectorAll(".e-message-item");
      messages.forEach(function(message) {
        var forwardEle = message.querySelector(".e-forwarded-indicator");
        if (forwardEle) {
          forwardEle.querySelector(".e-forward-message").innerHTML = _this.l10n.getConstant("forwarded");
        }
      });
      if (this.mentionObj) {
        this.mentionObj.noRecordsTemplate = this.l10n.getConstant("noRecordsTemplate");
      }
      if (this.sendIcon) {
        this.sendIcon.setAttribute("title", this.l10n.getConstant("send"));
      }
      if (this.attachmentIcon) {
        this.attachmentIcon.setAttribute("title", this.l10n.getConstant("attachments"));
      }
      var closeIcon = this.viewWrapper.querySelector(".e-chat-close");
      if (closeIcon) {
        closeIcon.setAttribute("title", this.l10n.getConstant("close"));
      }
      var attachmentPreview = this.viewWrapper.querySelector(".e-preview-overlay");
      if (attachmentPreview) {
        var downloadIcon = attachmentPreview.querySelector(".e-chat-download");
        if (downloadIcon) {
          downloadIcon.setAttribute("title", this.l10n.getConstant("download"));
        }
        var backIcon = attachmentPreview.querySelector(".e-chat-back-icon");
        if (backIcon) {
          backIcon.setAttribute("title", this.l10n.getConstant("close"));
        }
        var filePreviewText = attachmentPreview.querySelector(".e-preview-file-text");
        if (filePreviewText) {
          filePreviewText.textContent = this.l10n.getConstant("filePreview");
        }
      }
      var failureMessageElem = this.viewWrapper.querySelector(".e-failure-message");
      if (failureMessageElem) {
        if (failureMessageElem.classList.contains("e-size-failure")) {
          failureMessageElem.textContent = this.l10n.getConstant("fileSizeFailure");
        } else {
          var failureText = this.l10n.getConstant("fileCountFailure");
          failureText = failureText.replace("{0}", this.attachmentSettings.maximumCount.toString());
          if (this.attachmentSettings.maximumCount === 1) {
            failureText = failureText.replace("files", "file");
          }
          failureMessageElem.textContent = failureText;
        }
      }
      if (!this.typingUsers || this.typingUsers.length === 0) {
        return;
      }
      this.updateUserText();
    };
    ChatUI2.prototype.wireEvents = function() {
      this.wireFooterEvents(this.footerTemplate);
      EventHandler.add(this.messageWrapper, "scroll", this.handleScroll, this);
      EventHandler.add(this.downArrowIcon.element, "click", this.scrollBtnClick, this);
      EventHandler.add(this.downArrowIcon.element, "keydown", this.scrollBottomKeyHandler, this);
    };
    ChatUI2.prototype.unwireEvents = function() {
      this.unWireFooterEvents(this.footerTemplate);
      EventHandler.remove(this.messageWrapper, "scroll", this.handleScroll);
      EventHandler.remove(this.downArrowIcon.element, "click", this.scrollBtnClick);
      EventHandler.remove(this.downArrowIcon.element, "keydown", this.scrollBottomKeyHandler);
      if (this.attachmentIcon) {
        EventHandler.clearEvents(this.attachmentIcon);
      }
    };
    ChatUI2.prototype.destroyAttachments = function() {
      if (this.uploaderObj) {
        this.uploaderObj.destroy();
        this.uploaderObj = null;
      }
      if (this.attachmentIcon) {
        this.attachmentIcon.innerHTML = "";
        this.attachmentIcon.remove();
        this.attachmentIcon = null;
      }
      if (this.dropArea) {
        this.dropArea.innerHTML = "";
        this.dropArea.remove();
        this.dropArea = null;
      }
      if (this.messageWrapper) {
        var previewOverlay = this.messageWrapper.querySelector(".e-preview-overlay");
        if (previewOverlay) {
          previewOverlay.remove();
        }
      }
      this.uploadedFiles = [];
    };
    ChatUI2.prototype.destroyChatUI = function() {
      var properties = [
        "content",
        "sendIcon",
        "clearIcon",
        "editableTextarea",
        "footer",
        "indicatorWrapper",
        "messageWrapper",
        "viewWrapper",
        "chatHeader"
      ];
      for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        var element = prop;
        this.removeAndNullify(this[element]);
        this[element] = null;
      }
    };
    ChatUI2.prototype.scrollToBottom = function() {
      this.updateScroll(this.messageWrapper);
      this.toggleScrollIcon();
    };
    ChatUI2.prototype.addMessage = function(message) {
      if (isNullOrUndefined(message)) {
        return;
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      if (typeof message === "string") {
        var newMessageObj = {
          id: this.element.id + "-message-" + (this.messages.length + 1),
          author: this.user,
          text: message,
          timeStamp: /* @__PURE__ */ new Date(),
          timeStampFormat: this.timeStampFormat,
          attachedFile: null
        };
        this.messages = this.messages.concat([newMessageObj]);
        this.renderNewMessage(newMessageObj, this.messages.length - 1);
      } else {
        var newMessageObj = __assign2({}, message, { id: message.id || this.element.id + "-message-" + (this.messages.length + 1), author: message.author || this.user, text: message.text || "", timeStamp: message.timeStamp || /* @__PURE__ */ new Date(), timeStampFormat: message.timeStampFormat || this.timeStampFormat, status: message.status, mentionUsers: message.mentionUsers || [], isPinned: message.isPinned || false, replyTo: message.replyTo, isForwarded: message.isForwarded || false, attachedFile: message.attachedFile });
        this.messages = this.messages.concat([newMessageObj]);
        this.renderNewMessage(newMessageObj, this.messages.length - 1);
      }
      this.updateScrollPosition(true, 5);
      this.isProtectedOnChange = prevOnChange;
    };
    ChatUI2.prototype.prependMessages = function(messages) {
      if (isNullOrUndefined(messages) || messages.length === 0) {
        return;
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var isEmptyChat = this.messages.length > 0 ? false : true;
      var newMessageObjs = [];
      for (var i = 0; i < messages.length; i++) {
        var message = messages[parseInt(i.toString(), 10)];
        var newMessageObj = void 0;
        if (typeof message === "string") {
          newMessageObj = {
            id: this.element.id + "-message-" + (this.messages.length + i + 1),
            author: this.user,
            text: message,
            timeStamp: /* @__PURE__ */ new Date(),
            timeStampFormat: this.timeStampFormat,
            attachedFile: null
          };
        } else {
          newMessageObj = __assign2({}, message, { id: message.id || this.element.id + "-message-" + (this.messages.length + i + 1), author: message.author || this.user, text: message.text || "", timeStamp: message.timeStamp || /* @__PURE__ */ new Date(), timeStampFormat: message.timeStampFormat || this.timeStampFormat, status: message.status, mentionUsers: message.mentionUsers || [], isPinned: message.isPinned || false, replyTo: message.replyTo, isForwarded: message.isForwarded || false, attachedFile: message.attachedFile });
        }
        newMessageObjs.push(newMessageObj);
      }
      this.messages = newMessageObjs.concat(this.messages);
      if (isEmptyChat) {
        for (var i = 0; i < newMessageObjs.length; i++) {
          this.renderNewMessage(newMessageObjs[parseInt(i.toString(), 10)], i);
        }
      } else {
        for (var i = newMessageObjs.length - 1; i >= 0; i--) {
          this.renderGroup(this.messageWrapper, newMessageObjs[parseInt(i.toString(), 10)], true, i, -1, true);
        }
      }
      this.isProtectedOnChange = prevOnChange;
    };
    ChatUI2.prototype.updateMessage = function(message, msgId) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.messages = this.messages.map(function(messageItem) {
        return messageItem.id === msgId ? __assign2({}, messageItem, message) : messageItem;
      });
      this.updateMessageItem(message, msgId);
      this.isProtectedOnChange = prevOnChange;
    };
    ChatUI2.prototype.scrollToMessage = function(messageId) {
      var messageElement = this.messageWrapper.querySelector("#" + messageId);
      if (!messageElement) {
        return;
      }
      messageElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
    ChatUI2.prototype.focus = function() {
      if (this.editableTextarea) {
        this.setFocusAtEnd(this.editableTextarea);
      }
    };
    ChatUI2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.unwireEvents();
      if (this.toolbar) {
        this.toolbar.off("render-react-toolbar-template", this.addReactToolbarPortals);
      }
      if (this.cssClass) {
        removeClass([this.element], this.cssClass.split(" "));
      }
      this.element.classList.remove("e-rtl");
      this.destroyAndNullify(this.downArrowIcon);
      this.destroyAndNullify(this.toolbar);
      this.destroyAndNullify(this.dropDownButton);
      this.destroyAndNullify(this.mentionObj);
      this.destroyChatUI();
      this.destroyAttachments();
      this.intl = null;
    };
    ChatUI2.prototype.onPropertyChanged = function(newProp, oldProp) {
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "width":
          case "height":
            this.setDimension(this.element, this.width, this.height);
            break;
          case "placeholder":
            this.updatePlaceholder(this.placeholder);
            break;
          case "cssClass":
            this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
            break;
          case "enableRtl":
            this.element.classList[this.enableRtl ? "add" : "remove"]("e-rtl");
            if (!isNullOrUndefined(this.toolbar)) {
              this.toolbar.enableRtl = this.enableRtl;
              this.toolbar.dataBind();
            }
            break;
          case "showHeader":
            this.updateHeader(this.showHeader, this.chatHeader, this.viewWrapper);
            break;
          case "enableCompactMode":
            this.initializeCompactMode();
            this.renderUpdatedMessage();
            this.updateScrollPosition(true, 5);
            break;
          case "headerText":
            this.updateHeaderText();
            break;
          case "headerIconCss":
            this.updateHeaderIcon();
            break;
          case "messageToolbarSettings":
          case "messages": {
            this.renderUpdatedMessage();
            this.updateScrollPosition(true, 5);
            break;
          }
          case "user": {
            var newUser = {
              id: newProp.user.id ? newProp.user.id : this.user.id,
              user: newProp.user.user ? newProp.user.user : this.user.user,
              avatarUrl: newProp.user.avatarUrl ? newProp.user.avatarUrl : this.user.avatarUrl,
              avatarBgColor: newProp.user.avatarBgColor ? newProp.user.avatarBgColor : this.user.avatarBgColor,
              cssClass: newProp.user.cssClass ? newProp.user.cssClass : this.user.cssClass,
              statusIconCss: newProp.user.statusIconCss ? newProp.user.statusIconCss : this.user.statusIconCss
            };
            this.user = __assign2({}, this.user, newUser);
            break;
          }
          case "showTimeStamp":
          case "timeStampFormat":
          case "showTimeBreak":
            if (this.messages.length > 0) {
              this.renderUpdatedMessage();
            }
            break;
          case "showFooter":
            this.updateFooter(this.showFooter, this.footer);
            break;
          case "autoScrollToBottom":
            this.handleAutoScroll();
            break;
          case "suggestions":
            this.handleSuggestionUpdate();
            break;
          case "typingUsers":
            this.updateTypingUsers(this.typingUsers);
            break;
          case "locale":
            this.updateLocale();
            break;
          case "currencyCode":
            this.refresh();
            break;
          case "mentionTriggerChar":
            this.mentionObj.mentionChar = newProp.mentionTriggerChar;
            break;
          case "mentionUsers":
            this.updateMentionObj();
            break;
          case "enableAttachments":
            if (!this.footerTemplate) {
              var footerIconsWrapper = this.element.querySelector(".e-footer-icons-wrapper");
              this.updateAttachmentElement(footerIconsWrapper);
            }
            break;
          case "attachmentSettings":
            this.updateAttachmentSettings(newProp.attachmentSettings);
            break;
        }
      }
    };
    __decorate5([
      Property("100%")
    ], ChatUI2.prototype, "width", void 0);
    __decorate5([
      Property("100%")
    ], ChatUI2.prototype, "height", void 0);
    __decorate5([
      Complex({}, User)
    ], ChatUI2.prototype, "user", void 0);
    __decorate5([
      Property("Chat")
    ], ChatUI2.prototype, "headerText", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "headerIconCss", void 0);
    __decorate5([
      Property("Type your message…")
    ], ChatUI2.prototype, "placeholder", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "cssClass", void 0);
    __decorate5([
      Property(true)
    ], ChatUI2.prototype, "showHeader", void 0);
    __decorate5([
      Property(true)
    ], ChatUI2.prototype, "showFooter", void 0);
    __decorate5([
      Complex({ items: [] }, ToolbarSettings)
    ], ChatUI2.prototype, "headerToolbar", void 0);
    __decorate5([
      Property([])
    ], ChatUI2.prototype, "suggestions", void 0);
    __decorate5([
      Property(false)
    ], ChatUI2.prototype, "showTimeBreak", void 0);
    __decorate5([
      Collection([], Message)
    ], ChatUI2.prototype, "messages", void 0);
    __decorate5([
      Collection([], User)
    ], ChatUI2.prototype, "typingUsers", void 0);
    __decorate5([
      Property("dd/MM/yyyy hh:mm a")
    ], ChatUI2.prototype, "timeStampFormat", void 0);
    __decorate5([
      Property(true)
    ], ChatUI2.prototype, "showTimeStamp", void 0);
    __decorate5([
      Property(false)
    ], ChatUI2.prototype, "autoScrollToBottom", void 0);
    __decorate5([
      Property(false)
    ], ChatUI2.prototype, "loadOnDemand", void 0);
    __decorate5([
      Collection([], User)
    ], ChatUI2.prototype, "mentionUsers", void 0);
    __decorate5([
      Property("@")
    ], ChatUI2.prototype, "mentionTriggerChar", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "suggestionTemplate", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "footerTemplate", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "emptyChatTemplate", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "messageTemplate", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "timeBreakTemplate", void 0);
    __decorate5([
      Property("")
    ], ChatUI2.prototype, "typingUsersTemplate", void 0);
    __decorate5([
      Property(false)
    ], ChatUI2.prototype, "enableCompactMode", void 0);
    __decorate5([
      Complex({ width: "100%", items: [{ iconCss: "e-icons e-chat-copy", tooltip: "Copy" }, { iconCss: "e-icons e-chat-reply", tooltip: "Reply" }, { iconCss: "e-icons e-chat-pin", tooltip: "Pin" }, { iconCss: "e-icons e-chat-trash", tooltip: "Delete" }] }, MessageToolbarSettings)
    ], ChatUI2.prototype, "messageToolbarSettings", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "messageSend", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "userTyping", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "mentionSelect", void 0);
    __decorate5([
      Property(false)
    ], ChatUI2.prototype, "enableAttachments", void 0);
    __decorate5([
      Complex({ saveUrl: "", removeUrl: "", maxFileSize: 3e7, allowedFileTypes: "", saveFormat: "Blob", path: "", enableDragAndDrop: true, maximumCount: 10, previewTemplate: "", attachmentTemplate: "" }, FileAttachmentSettings)
    ], ChatUI2.prototype, "attachmentSettings", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "beforeAttachmentUpload", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "attachmentUploadSuccess", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "attachmentUploadFailure", void 0);
    __decorate5([
      Event()
    ], ChatUI2.prototype, "attachmentRemoved", void 0);
    ChatUI2 = __decorate5([
      NotifyPropertyChanges
    ], ChatUI2);
    return ChatUI2;
  })(InterActiveChatBase)
);

// node_modules/@syncfusion/ej2-interactive-chat/src/inline-ai-assist/inline-ai-assist.js
var __extends5 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResponseMode;
(function(ResponseMode2) {
  ResponseMode2["Inline"] = "Inline";
  ResponseMode2["Popup"] = "Popup";
})(ResponseMode || (ResponseMode = {}));
var PromptResponse = (
  /** @class */
  (function(_super) {
    __extends5(PromptResponse2, _super);
    function PromptResponse2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Property("")
    ], PromptResponse2.prototype, "prompt", void 0);
    __decorate6([
      Property("")
    ], PromptResponse2.prototype, "response", void 0);
    return PromptResponse2;
  })(ChildProperty)
);
var CommandItem = (
  /** @class */
  (function(_super) {
    __extends5(CommandItem2, _super);
    function CommandItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "id", void 0);
    __decorate6([
      Property(false)
    ], CommandItem2.prototype, "disabled", void 0);
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "iconCss", void 0);
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "label", void 0);
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "prompt", void 0);
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "groupBy", void 0);
    __decorate6([
      Property("")
    ], CommandItem2.prototype, "tooltip", void 0);
    return CommandItem2;
  })(ChildProperty)
);
var ResponseItem = (
  /** @class */
  (function(_super) {
    __extends5(ResponseItem2, _super);
    function ResponseItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Property("")
    ], ResponseItem2.prototype, "id", void 0);
    __decorate6([
      Property(false)
    ], ResponseItem2.prototype, "disabled", void 0);
    __decorate6([
      Property("")
    ], ResponseItem2.prototype, "iconCss", void 0);
    __decorate6([
      Property("")
    ], ResponseItem2.prototype, "label", void 0);
    __decorate6([
      Property("")
    ], ResponseItem2.prototype, "groupBy", void 0);
    __decorate6([
      Property("")
    ], ResponseItem2.prototype, "tooltip", void 0);
    return ResponseItem2;
  })(ChildProperty)
);
var CommandSettings = (
  /** @class */
  (function(_super) {
    __extends5(CommandSettings2, _super);
    function CommandSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Event()
    ], CommandSettings2.prototype, "itemSelect", void 0);
    __decorate6([
      Collection([], CommandItem)
    ], CommandSettings2.prototype, "commands", void 0);
    __decorate6([
      Property("")
    ], CommandSettings2.prototype, "popupHeight", void 0);
    __decorate6([
      Property("")
    ], CommandSettings2.prototype, "popupWidth", void 0);
    return CommandSettings2;
  })(ChildProperty)
);
var ResponseSettings = (
  /** @class */
  (function(_super) {
    __extends5(ResponseSettings2, _super);
    function ResponseSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Event()
    ], ResponseSettings2.prototype, "itemSelect", void 0);
    __decorate6([
      Collection([], ResponseItem)
    ], ResponseSettings2.prototype, "items", void 0);
    return ResponseSettings2;
  })(ChildProperty)
);
var InlineToolbarSettings = (
  /** @class */
  (function(_super) {
    __extends5(InlineToolbarSettings2, _super);
    function InlineToolbarSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Property("Inline")
    ], InlineToolbarSettings2.prototype, "toolbarPosition", void 0);
    __decorate6([
      Collection([], ToolbarItem)
    ], InlineToolbarSettings2.prototype, "items", void 0);
    __decorate6([
      Event()
    ], InlineToolbarSettings2.prototype, "itemClick", void 0);
    return InlineToolbarSettings2;
  })(ChildProperty)
);
var InlineAIAssist = (
  /** @class */
  (function(_super) {
    __extends5(InlineAIAssist2, _super);
    function InlineAIAssist2(options, element) {
      var _this = _super.call(this, options, element) || this;
      _this.sendToolbarItem = null;
      _this.isResponseRequested = false;
      _this.responseContainerCreated = false;
      _this.isStopRequested = false;
      _this.commandOptionsData = [];
      _this.responseOptionsData = [];
      _this.typingIndicatorEl = null;
      return _this;
    }
    InlineAIAssist2.prototype.preRender = function() {
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
    };
    InlineAIAssist2.prototype.getDirective = function() {
      return "EJS-INLINEAIASSIST";
    };
    InlineAIAssist2.prototype.getModuleName = function() {
      return "inlineaiassist";
    };
    InlineAIAssist2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    InlineAIAssist2.prototype.render = function() {
      this.initializeLocale();
      this.resolveTargetElement();
      this.resolveRelateToElement();
      this.renderPopup();
      this.addRtlClass(this.element, this.enableRtl);
      this.wireEvents();
    };
    InlineAIAssist2.prototype.initializeLocale = function() {
      this.l10n = new L10n("inline-ai-assist", {
        stopResponseText: "Stop Responding",
        send: "Send",
        thinkingIndicator: "Thinking",
        editingIndicator: "Editing"
      }, this.locale);
      this.l10n.setLocale(this.locale);
    };
    InlineAIAssist2.prototype.renderPopup = function() {
      var _this = this;
      this.element.classList.add("e-inline-ai-assist");
      if (this.cssClass) {
        this.element.classList.add(this.cssClass);
      }
      this.contentWrapper = this.createElement("div", { className: "e-inline-assist-container" });
      var content = this.createElement("div", { className: "e-content" });
      this.contentWrapper.appendChild(content);
      this.footer = this.createElement("div", { className: "e-footer" });
      this.updateFooterClass(this.editorTemplate);
      this.renderInlineFooter();
      this.contentWrapper.appendChild(this.footer);
      this.element.appendChild(this.contentWrapper);
      if (this.targetEl && this.targetEl !== document.body) {
        this.targetEl.appendChild(this.element);
      }
      this.popupObj = new Popup(this.element, {
        height: this.popupHeight ? formatUnit(this.popupHeight) : "auto",
        width: this.popupWidth ? formatUnit(this.popupWidth) : "400px",
        relateTo: this.relateToEl,
        position: { X: "left", Y: "bottom" },
        collision: { X: "flip", Y: "flip" },
        targetType: "relative",
        close: function() {
          _this.trigger("close", {});
          _this.onPopupClose();
        },
        open: function() {
          _this.trigger("open", {});
          _this.attachPopupEventHandlers();
        },
        zIndex: this.zIndex
      });
      this.popupObj.hide();
    };
    InlineAIAssist2.prototype.showPopupWithData = function(dataSource, width, height) {
      if (width === void 0) {
        width = "200px";
      }
      if (height === void 0) {
        height = "400px";
      }
      this.mentionPopupObj.dataSource = dataSource;
      this.mentionPopupObj.popupWidth = width;
      this.mentionPopupObj.popupHeight = height;
      this.mentionPopupObj.dataBind();
      this.mentionPopupObj.showPopup();
    };
    InlineAIAssist2.prototype.showResponsePopup = function() {
      if (this.popupObj.element.classList.contains("e-popup-open")) {
        this.showPopupWithData(this.responseOptionsData, "auto", "400px");
      }
    };
    InlineAIAssist2.prototype.showCommandMenuPopup = function() {
      this.showPopupWithData(this.commandOptionsData, this.commandSettings.popupWidth || "200px", this.commandSettings.popupHeight || "400px");
    };
    InlineAIAssist2.prototype.setCommandPopupData = function() {
      this.commandOptionsData = this.commandSettings.commands.map(function(cmd) {
        return {
          label: cmd.label,
          iconCss: cmd.iconCss,
          id: cmd.id,
          disabled: cmd.disabled,
          groupBy: cmd.groupBy,
          tooltip: cmd.tooltip
        };
      });
    };
    InlineAIAssist2.prototype.setResponsePopupData = function() {
      var acceptItem = {
        label: "Accept",
        iconCss: "e-icons e-inline-accept"
      };
      var rejectItem = {
        label: "Discard",
        iconCss: "e-icons e-inline-discard"
      };
      var mentionDataSource = [acceptItem, rejectItem];
      if (this.responseSettings.items && this.responseSettings.items.length > 0) {
        var customItems = this.responseSettings.items.map(function(item) {
          return {
            label: item.label,
            iconCss: item.iconCss,
            id: item.id,
            groupBy: item.groupBy,
            disabled: item.disabled,
            tooltip: item.tooltip
          };
        });
        mentionDataSource = mentionDataSource.concat(customItems);
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.responseSettings.items = mentionDataSource;
      this.isProtectedOnChange = prevOnChange;
      this.responseOptionsData = mentionDataSource;
    };
    InlineAIAssist2.prototype.renderMentionPopup = function() {
      var _this = this;
      var mentionEl = this.createElement("div", { attrs: { class: "e-mention-container" } });
      this.element.appendChild(mentionEl);
      if (this.commandSettings.commands) {
        this.setCommandPopupData();
      }
      this.setResponsePopupData();
      var mentionDataSource = this.responseOptionsData;
      if (this.commandSettings.commands.length > 0) {
        mentionDataSource = this.commandOptionsData;
      }
      this.mentionPopupObj = new Mention({
        mentionChar: "",
        target: this.editableTextarea,
        dataSource: mentionDataSource,
        fields: { text: "label", iconCss: "iconCss" },
        popupWidth: this.commandSettings.commands.length > 0 ? this.commandSettings.popupWidth : "200px",
        popupHeight: this.commandSettings.commands.length > 0 ? this.commandSettings.popupHeight : "400px",
        select: function(args) {
          args.cancel = true;
          _this.onMentionCommandSelect(args);
        },
        locale: this.locale,
        opened: function() {
          _this.positionMentionPopup();
        }
      }, mentionEl);
    };
    InlineAIAssist2.prototype.positionMentionPopup = function() {
      if (this.mentionPopupObj) {
        var mainPopupElement = this.popupObj.element;
        var mainRect = mainPopupElement.getBoundingClientRect();
        var popupObj = this.mentionPopupObj.popupObj;
        if (popupObj && this.element) {
          popupObj.actionOnScroll = "reposition";
          popupObj.offsetX = 0;
          popupObj.offsetY = mainRect.height;
          popupObj.position = { X: "left", Y: "top" };
          popupObj.relateTo = this.element;
          popupObj.targetType = "relative";
          popupObj.collision = { X: "flip", Y: "flip" };
          popupObj.refreshPosition();
          this.mentionPopupObj.element.style.display = "block";
          this.mentionPopupObj.element.style.display = "";
        }
      }
    };
    InlineAIAssist2.prototype.onMentionCommandSelect = function(args) {
      var selectedItem = args.itemData;
      var matchedCommand = this.commandSettings.commands.find(function(cmd) {
        return cmd.label === selectedItem.label;
      });
      if (matchedCommand) {
        var commandItemSelectEventArgs = {
          command: selectedItem,
          event: args.e,
          cancel: false,
          element: args.item
        };
        if (this.commandSettings.itemSelect) {
          this.commandSettings.itemSelect.call(this, commandItemSelectEventArgs);
        }
        if (!commandItemSelectEventArgs.cancel && matchedCommand.prompt) {
          this.executePrompt(matchedCommand.prompt);
        }
      } else {
        var responseItemSelectEventArgs = {
          command: selectedItem,
          event: args.e,
          cancel: false,
          element: args.item
        };
        if (this.responseSettings.itemSelect) {
          this.responseSettings.itemSelect.call(this, responseItemSelectEventArgs);
        }
      }
      this.mentionPopupObj.hidePopup();
    };
    InlineAIAssist2.prototype.resolveTargetElement = function() {
      this.targetEl = typeof this.target === "string" ? document.querySelector(this.target) : this.target instanceof HTMLElement ? this.target : document.body;
    };
    InlineAIAssist2.prototype.resolveRelateToElement = function() {
      if (this.relateTo === "" || isNullOrUndefined(this.relateTo)) {
        return;
      }
      this.relateToEl = typeof this.relateTo === "string" ? document.querySelector(this.relateTo) : this.relateTo;
    };
    InlineAIAssist2.prototype.onPopupClose = function() {
      this.clearResponses();
      this.isResponseRequested = false;
      this.toggleStopRespondingButton(false);
      if (this.editableTextarea) {
        this.editableTextarea.setAttribute("contenteditable", "true");
      }
      this.detachPopupEventHandlers();
      if (this.mentionPopupObj && this.mentionPopupObj.element) {
        this.mentionPopupObj.hidePopup();
      }
    };
    InlineAIAssist2.prototype.renderInlineFooter = function() {
      var textareaAndIconsWrapper = this.createElement("div", { attrs: { class: "e-textarea-icons-wrapper" } });
      if (this.editorTemplate) {
        this.updateContent(this.editorTemplate, this.footer, {}, "editorTemplate");
      } else {
        this.editableTextarea = this.createElement("div", {
          attrs: {
            class: "e-assist-textarea",
            contenteditable: "true",
            placeholder: this.placeholder,
            role: "textbox",
            "aria-multiline": "true"
          },
          innerHTML: this.prompt
        });
        var hiddenTextarea = this.createElement("textarea", {
          attrs: {
            class: "e-hidden-textarea",
            name: "userPrompt",
            value: this.prompt
          }
        });
        textareaAndIconsWrapper.appendChild(this.editableTextarea);
        textareaAndIconsWrapper.appendChild(hiddenTextarea);
        var footerIconsWrapper = this.createElement("div", { attrs: { class: "e-footer-icons-wrapper" } });
        this.renderFooterToolbar(footerIconsWrapper);
        textareaAndIconsWrapper.appendChild(footerIconsWrapper);
        this.footer.appendChild(textareaAndIconsWrapper);
        this.footer.classList.add("e-footer-focus-wave-effect");
        this.refreshTextareaUI();
        this.pushToUndoStack(this.prompt);
        EventHandler.add(this.editableTextarea, "keyup", this.keyUpHandler, this);
        this.editableTextarea.addEventListener("keydown", this.keyDownHandler.bind(this), true);
        this.renderMentionPopup();
      }
    };
    InlineAIAssist2.prototype.keyDownHandler = function(e) {
      if (e.shiftKey && e.key === "Enter") {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    };
    InlineAIAssist2.prototype.updateEditorTemplate = function() {
      this.footer.innerHTML = "";
      this.updateFooterClass(this.editorTemplate);
      this.renderInlineFooter();
    };
    InlineAIAssist2.prototype.renderFooterToolbar = function(container) {
      var _this = this;
      var toolbarItems = [];
      var customItems = this.inlineToolbarSettings.items || [];
      for (var _i = 0, customItems_1 = customItems; _i < customItems_1.length; _i++) {
        var customItem = customItems_1[_i];
        var mappedItem = {
          type: customItem.type,
          template: customItem.template,
          disabled: customItem.disabled,
          cssClass: customItem.cssClass,
          visible: customItem.visible,
          tooltipText: customItem.tooltip,
          prefixIcon: customItem.iconCss,
          text: customItem.text,
          align: customItem.align,
          tabIndex: customItem.tabIndex
        };
        toolbarItems.push(mappedItem);
      }
      if (!this.isDuplicatedItem("e-icons e-inline-send", toolbarItems)) {
        this.sendToolbarItem = {
          prefixIcon: "e-icons e-inline-send",
          align: "Right"
        };
        toolbarItems.push(this.sendToolbarItem);
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var footerToolbarItems = toolbarItems.map(function(item) {
        return {
          type: item.type,
          text: item.text,
          iconCss: item.prefixIcon,
          cssClass: item.cssClass,
          tooltip: item.tooltipText,
          template: item.template,
          disabled: item.disabled,
          visible: item.visible,
          align: item.align,
          tabIndex: item.tabIndex
        };
      });
      this.inlineToolbarSettings.items = footerToolbarItems;
      this.isProtectedOnChange = prevOnChange;
      this.footerToolbarEle = new Toolbar({
        items: toolbarItems,
        enableRtl: this.enableRtl,
        width: "100%",
        clicked: function(args) {
          var eventItemArgs = {
            type: args.item.type,
            text: args.item.text,
            iconCss: args.item.prefixIcon,
            cssClass: args.item.cssClass,
            tooltip: args.item.tooltipText,
            template: args.item.template,
            disabled: args.item.disabled,
            visible: args.item.visible,
            align: args.item.align,
            tabIndex: args.item.tabIndex
          };
          var eventArgs = {
            item: eventItemArgs,
            event: args.originalEvent,
            cancel: false
          };
          if (_this.inlineToolbarSettings.itemClick) {
            _this.inlineToolbarSettings.itemClick.call(_this, eventArgs);
          }
          if (!eventArgs.cancel) {
            switch (args.item.prefixIcon) {
              case "e-icons e-inline-send":
                if (!_this.isResponseRequested && !args.item.disabled) {
                  _this.onSendIconClick();
                }
                break;
              case "e-icons e-inline-stop":
                if (_this.isResponseRequested) {
                  _this.respondingStopper();
                }
                break;
            }
          }
        }
      });
      var toolbarContainer = this.createElement("div", { attrs: { class: "e-footer-toolbar-wrapper" } });
      this.footerToolbarEle.appendTo(toolbarContainer);
      this.footerToolbarEle.element.setAttribute("aria-label", "assist-footer-toolbar");
      container.appendChild(toolbarContainer);
    };
    InlineAIAssist2.prototype.isDuplicatedItem = function(iconCss, toolbarItems) {
      for (var _i = 0, toolbarItems_1 = toolbarItems; _i < toolbarItems_1.length; _i++) {
        var item = toolbarItems_1[_i];
        if ((item.prefixIcon || "") === iconCss) {
          switch (iconCss) {
            case "e-icons e-inline-send":
              this.sendToolbarItem = item;
              break;
          }
          return true;
        }
      }
      return false;
    };
    InlineAIAssist2.prototype.keyUpHandler = function(e) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    };
    InlineAIAssist2.prototype.wireEvents = function() {
      this.wireFooterEvents(this.editorTemplate);
      if (this.editableTextarea && this.footer) {
        var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
        if (footerIconsWrapper) {
          EventHandler.add(footerIconsWrapper, "pointerdown", this.onFooterIconsPointerDown, this);
          EventHandler.add(footerIconsWrapper, "click", this.onFooterIconsClick, this);
          EventHandler.add(footerIconsWrapper, "focusout", this.onFooterIconsFocusOut, this);
        }
      }
    };
    InlineAIAssist2.prototype.unWireEvents = function() {
      this.unWireFooterEvents(this.editorTemplate);
      if (this.editableTextarea) {
        EventHandler.remove(this.editableTextarea, "keyup", this.keyUpHandler);
        this.editableTextarea.removeEventListener("keydown", this.keyDownHandler.bind(this), true);
        var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
        if (footerIconsWrapper) {
          EventHandler.remove(footerIconsWrapper, "pointerdown", this.onFooterIconsPointerDown);
          EventHandler.remove(footerIconsWrapper, "click", this.onFooterIconsClick);
          EventHandler.remove(footerIconsWrapper, "focusout", this.onFooterIconsFocusOut);
        }
      }
    };
    InlineAIAssist2.prototype.attachPopupEventHandlers = function() {
      EventHandler.add(document, "keydown", this.onPopupKeyDown, this);
      EventHandler.add(document, "mousedown", this.onPopupOutsideClick, this);
    };
    InlineAIAssist2.prototype.detachPopupEventHandlers = function() {
      EventHandler.remove(document, "keydown", this.onPopupKeyDown);
      EventHandler.remove(document, "mousedown", this.onPopupOutsideClick);
    };
    InlineAIAssist2.prototype.onPopupKeyDown = function(e) {
      if (e.key === "Escape" && this.popupObj && this.popupObj.element.offsetParent !== null) {
        e.preventDefault();
        this.hidePopup();
      }
    };
    InlineAIAssist2.prototype.onPopupOutsideClick = function(e) {
      e.stopImmediatePropagation();
      if (!this.popupObj || this.popupObj.element.offsetParent === null) {
        return;
      }
      var target = e.target;
      var popupElement = this.popupObj.element;
      if (this.mentionPopupObj && this.mentionPopupObj.element) {
        var mentionPopupElement = this.mentionPopupObj.element;
        if (mentionPopupElement.contains(target)) {
          return;
        }
      }
      if (!popupElement.contains(target)) {
        this.hidePopup();
      }
    };
    InlineAIAssist2.prototype.handleInput = function(event2) {
      var textareaEle = event2.target;
      var isEmpty = textareaEle.innerHTML === "<br>";
      if (isEmpty) {
        this.clearBreakTags(textareaEle);
      }
      var textContent = textareaEle.innerHTML;
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.prompt = SanitizeHtmlHelper.sanitize(textContent);
      this.isProtectedOnChange = prevOnChange;
      this.refreshTextareaUI();
      this.scheduleUndoPush();
      this.redoStack = [];
      if (this.prompt && this.prompt.trim().length > 0) {
        this.hideCommandPopup();
      } else {
        if (this.commandSettings.commands && this.commandSettings.commands.length > 0 && !this.hasResponse) {
          this.showCommandMenuPopup();
        }
      }
    };
    InlineAIAssist2.prototype.onFocusEditableTextarea = function() {
      if (this.footer) {
        this.footer.classList.add("e-footer-focused");
      }
    };
    InlineAIAssist2.prototype.onBlurEditableTextarea = function() {
      if (this.footer) {
        this.footer.classList.remove("e-footer-focused");
      }
    };
    InlineAIAssist2.prototype.showTypingIndicator = function(text) {
      if (!this.editableTextarea) {
        return;
      }
      this.editableTextarea.setAttribute("contenteditable", "false");
      this.editableTextarea.classList.add("e-response-indicator-active");
      if (!this.typingIndicatorEl) {
        this.typingIndicatorEl = this.createElement("span", { className: "e-response-indicator" });
      }
      this.typingIndicatorEl.innerHTML = '<span class="e-indicator-text">' + text + '</span><span class="e-indicator"></span><span class="e-indicator"></span><span class="e-indicator"></span>';
      this.editableTextarea.innerHTML = "";
      this.editableTextarea.appendChild(this.typingIndicatorEl);
    };
    InlineAIAssist2.prototype.hideTypingIndicator = function() {
      if (!this.editableTextarea) {
        return;
      }
      this.editableTextarea.setAttribute("contenteditable", "true");
      this.editableTextarea.classList.remove("e-typing-indicator-active");
      if (this.typingIndicatorEl && this.typingIndicatorEl.parentElement === this.editableTextarea) {
        this.editableTextarea.removeChild(this.typingIndicatorEl);
      }
      this.editableTextarea.innerHTML = "";
    };
    InlineAIAssist2.prototype.onSendIconClick = function() {
      if (this.isResponseRequested || !this.prompt.trim()) {
        return;
      }
      this.isResponseRequested = true;
      this.isStopRequested = false;
      this.hasResponse = false;
      var prevOnChange = this.isProtectedOnChange;
      this.clearResponses();
      this.toggleStopRespondingButton(true);
      if (this.responseMode.toLowerCase() === "inline") {
        this.showTypingIndicator(this.l10n.getConstant("thinkingIndicator"));
      } else {
        this.responseContainerCreated = false;
        this.createResponseContainer();
        this.renderSkeleton();
        if (this.responseContainer && this.skeletonContainer) {
          this.responseContainer.appendChild(this.skeletonContainer);
        }
      }
      var eventArgs = {
        cancel: false,
        prompt: this.prompt
      };
      if (!this.editorTemplate) {
        this.isProtectedOnChange = true;
        if (this.responseMode.toLowerCase() !== "inline") {
          this.editableTextarea.innerText = "";
        }
        this.isProtectedOnChange = prevOnChange;
        this.pushToUndoStack("");
        this.refreshTextareaUI();
      }
      this.trigger("promptRequest", eventArgs);
    };
    InlineAIAssist2.prototype.respondingStopper = function() {
      this.isResponseRequested = false;
      this.isStopRequested = true;
      var hasGeneratedResponse = false;
      if (this.responseMode.toLowerCase() === "inline") {
        this.hideTypingIndicator();
        hasGeneratedResponse = this.hasResponse;
      } else {
        this.removeSkeleton();
        var responseTextElement = this.element.querySelector(".e-response-text");
        if (responseTextElement && responseTextElement.innerText && responseTextElement.innerText.trim().length > 0) {
          hasGeneratedResponse = true;
        }
      }
      this.toggleStopRespondingButton(false);
      if (hasGeneratedResponse) {
        this.showResponsePopup();
      }
    };
    InlineAIAssist2.prototype.createResponseContainer = function() {
      if (!this.responseContainerCreated) {
        this.responseContainer = this.createElement("div", { className: "e-output-container " + (this.responseTemplate ? "e-response-item-template" : "") });
        var responseText = this.createElement("div", { className: "e-response-text" });
        this.responseContainer.appendChild(responseText);
        var content = this.element.querySelector(".e-content");
        if (content) {
          content.appendChild(this.responseContainer);
        }
        this.responseContainerCreated = true;
      }
    };
    InlineAIAssist2.prototype.renderSkeleton = function() {
      this.skeletonContainer = this.createElement("div", { className: "e-output-container" });
      var outputViewWrapper = this.createElement("div", { className: "e-output", styles: "width: 70%;" });
      var skeletonIconEle = this.createElement("span", { className: "e-output-icon e-skeleton e-skeleton-text e-shimmer-wave" });
      var skeletonBodyEle = this.createElement("div", { className: "e-loading-body" });
      var _a = [
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 100%; height: 15px;" }),
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 75%; height: 15px;" }),
        this.createElement("div", { className: "e-skeleton e-skeleton-text e-shimmer-wave", styles: "width: 50%; height: 15px;" })
      ], skeletonLine1 = _a[0], skeletonLine2 = _a[1], skeletonLine3 = _a[2];
      skeletonBodyEle.append(skeletonLine1, skeletonLine2, skeletonLine3);
      outputViewWrapper.append(skeletonBodyEle);
      this.skeletonContainer.append(skeletonIconEle, outputViewWrapper);
    };
    InlineAIAssist2.prototype.removeSkeleton = function() {
      if (this.responseContainer && this.responseContainer.querySelector(".e-skeleton")) {
        this.skeletonContainer.remove();
      }
    };
    InlineAIAssist2.prototype.applyPromptChange = function(newState, oldState, event2) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      this.prompt = this.editableTextarea.innerHTML = newState.content;
      this.isProtectedOnChange = prevOnChange;
      this.refreshTextareaUI();
      this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
    };
    InlineAIAssist2.prototype.refreshTextareaUI = function() {
      this.updateHiddenTextarea(this.prompt);
      this.checkAndActivateSendIcon();
      this.updateFooterElementClass();
      this.updateFooterType(this.inlineToolbarSettings.toolbarPosition);
    };
    InlineAIAssist2.prototype.checkAndActivateSendIcon = function() {
      if (!this.footerToolbarEle) {
        return;
      }
      var length = this.editableTextarea.innerText.length;
      if (this.sendToolbarItem && this.sendToolbarItem.prefixIcon === "e-icons e-inline-send") {
        var sendItem = this.footerToolbarEle.element.querySelector(".e-inline-send");
        if (sendItem) {
          if (length > 0 && !this.isResponseRequested) {
            removeClass([sendItem], "disabled");
            sendItem.setAttribute("title", this.l10n.getConstant("send"));
          } else {
            addClass([sendItem], "disabled");
          }
        }
      }
    };
    InlineAIAssist2.prototype.toggleStopRespondingButton = function(show) {
      var sendIconClass = "e-inline-send";
      var stopIconClass = "e-inline-stop";
      var stopTooltip = this.l10n.getConstant("stopResponseText");
      if (!this.editorTemplate) {
        var currentIconClass_1 = show ? sendIconClass : stopIconClass;
        var newIconClass = show ? stopIconClass : sendIconClass;
        var currentItem = this.footerToolbarEle.items.find(function(item) {
          return item.prefixIcon === "e-icons " + currentIconClass_1;
        });
        var itemIndex = this.footerToolbarEle.items.indexOf(currentItem);
        var currentToolbarItemElement = this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1) ? this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1).closest(".e-toolbar-item") : null;
        if (itemIndex !== -1 && currentItem && currentToolbarItemElement) {
          var newItem = {
            prefixIcon: "e-icons " + newIconClass,
            align: "Right",
            tooltipText: show ? stopTooltip : void 0
          };
          this.footerToolbarEle.addItems([newItem], itemIndex);
          this.footerToolbarEle.removeItems(currentToolbarItemElement);
        }
        this.refreshTextareaUI();
      } else {
        var currentIcon = this.footer.querySelector("." + (show ? sendIconClass : stopIconClass));
        if (currentIcon) {
          currentIcon.classList.replace(show ? sendIconClass : stopIconClass, show ? stopIconClass : sendIconClass);
          if (show) {
            currentIcon.title = stopTooltip;
            EventHandler.add(currentIcon, "click", this.respondingStopper, this);
          } else {
            currentIcon.removeAttribute("title");
            EventHandler.remove(currentIcon, "click", this.respondingStopper);
          }
        }
      }
    };
    InlineAIAssist2.prototype.updateFooterToolbar = function() {
      var footerIconsWrapper = this.footer.querySelector(".e-footer-icons-wrapper");
      if (footerIconsWrapper) {
        footerIconsWrapper.innerHTML = "";
        this.footerToolbarEle = null;
        this.sendToolbarItem = null;
        this.renderFooterToolbar(footerIconsWrapper);
        this.refreshTextareaUI();
      }
    };
    InlineAIAssist2.prototype.keyHandler = function(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        this.pushToUndoStack(this.editableTextarea.innerText);
        e.preventDefault();
        if (!this.isResponseRequested) {
          this.onSendIconClick();
        }
      } else {
        this.handleUndoRedo(e);
      }
    };
    InlineAIAssist2.prototype.footerKeyHandler = function(e) {
      e.stopPropagation();
      var targetElement = e.target;
      if (targetElement.classList.contains("e-tbar-btn")) {
        return;
      } else if (e.key === "Escape") {
        this.onPopupKeyDown(e);
        return;
      }
      this.keyHandler(e);
    };
    InlineAIAssist2.prototype.addResponse = function(response, isFinalUpdate) {
      if (isFinalUpdate === void 0) {
        isFinalUpdate = true;
      }
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      if (this.isStopRequested) {
        this.isStopRequested = false;
        this.isResponseRequested = false;
        if (this.responseMode.toLowerCase() === "inline") {
          this.hideTypingIndicator();
          this.toggleStopRespondingButton(false);
        }
        return;
      }
      var htmlResponse = MarkdownConverter.toHtml(response);
      this.prompts = this.prompts.concat([{ prompt: this.prompt, response: htmlResponse }]);
      this.prompt = "";
      this.hasResponse = true;
      if (this.responseMode.toLowerCase() === "inline") {
        if (isFinalUpdate) {
          this.hideTypingIndicator();
          this.isResponseRequested = false;
          this.toggleStopRespondingButton(false);
          this.showResponsePopup();
        } else {
          if (!this.typingIndicatorEl) {
            this.showTypingIndicator(this.l10n.getConstant("editingIndicator"));
          } else {
            var indicatorTextElement = this.typingIndicatorEl.querySelector(".e-indicator-text");
            indicatorTextElement.innerHTML = this.l10n.getConstant("editingIndicator");
          }
        }
      } else {
        if (!this.responseContainerCreated) {
          this.responseContainerCreated = false;
          this.createResponseContainer();
        }
        if (this.enableStreaming && !this.responseTemplate) {
          this.streamResponse(htmlResponse);
          return;
        } else {
          if (this.responseTemplate) {
            this.renderResponseWithTemplate(response);
          } else {
            this.removeSkeleton();
            var responseItem = this.element.querySelector(".e-response-text");
            if (!responseItem) {
              return;
            }
            responseItem.innerHTML = htmlResponse;
          }
          if (isFinalUpdate) {
            this.isResponseRequested = false;
            this.toggleStopRespondingButton(false);
            this.showResponsePopup();
          }
        }
      }
      this.isProtectedOnChange = prevOnChange;
    };
    InlineAIAssist2.prototype.streamResponse = function(response) {
      var _this = this;
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var i = 0;
      var words = response.split(" ");
      var wordCount = words.length;
      var lastResponse = "";
      var responseItem = this.element.querySelector(".e-response-text");
      var streamingResponse = function() {
        if (_this.isStopRequested) {
          return;
        }
        lastResponse += (i === 0 ? "" : " ") + words[parseInt(i.toString(), 10)];
        i++;
        _this.removeSkeleton();
        if (responseItem) {
          responseItem.innerHTML = lastResponse;
        }
        if (i < wordCount) {
          setTimeout(function() {
            streamingResponse();
          }, 15);
        } else {
          var isFinalUpdate = lastResponse.length === response.length;
          if (isFinalUpdate) {
            _this.isResponseRequested = false;
            _this.toggleStopRespondingButton(false);
            _this.showResponsePopup();
          }
          _this.isProtectedOnChange = prevOnChange;
        }
      };
      streamingResponse();
    };
    InlineAIAssist2.prototype.executePrompt = function(prompt) {
      if (!isNullOrUndefined(prompt) && prompt.trim().length > 0) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = prompt;
        this.isProtectedOnChange = prevOnChange;
        this.onSendIconClick();
      }
    };
    InlineAIAssist2.prototype.showPopup = function(x, y) {
      if (this.popupObj) {
        var positioningElement = this.relateToEl || document.body;
        this.popupObj.setProperties({ relateTo: positioningElement, targetType: "relative", offsetX: x ? x : 0, offsetY: y ? y : 0 }, true);
        this.popupObj.refreshPosition();
        this.popupObj.show();
        if (this.editableTextarea) {
          this.editableTextarea.focus();
        }
        this.hasResponse = false;
        if (this.mentionPopupObj && this.commandSettings.commands.length > 0) {
          this.showCommandMenuPopup();
        }
      }
    };
    InlineAIAssist2.prototype.hidePopup = function() {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      if (this.mentionPopupObj) {
        this.mentionPopupObj.dataSource = this.commandOptionsData;
        this.mentionPopupObj.dataBind();
      }
      if (this.popupObj) {
        this.clearResponses();
        this.prompts = [];
        this.editableTextarea.innerHTML = "";
        this.refreshTextareaUI();
        this.popupObj.hide();
      }
      this.isProtectedOnChange = prevOnChange;
    };
    InlineAIAssist2.prototype.showCommandPopup = function() {
      if (this.popupObj.element.classList.contains("e-popup-open")) {
        this.showCommandMenuPopup();
      }
    };
    InlineAIAssist2.prototype.hideCommandPopup = function() {
      if (this.mentionPopupObj && this.mentionPopupObj.element.classList.contains("e-popup-open")) {
        this.mentionPopupObj.hidePopup();
      }
    };
    InlineAIAssist2.prototype.renderResponseWithTemplate = function(response) {
      var outputContainer = this.element.querySelector(".e-output-container");
      if (!outputContainer) {
        return;
      }
      outputContainer.innerHTML = "";
      var context = {
        response,
        responseItems: this.responseSettings.items
      };
      this.updateContent(this.responseTemplate, outputContainer, context, "responseTemplate");
    };
    InlineAIAssist2.prototype.clearResponses = function() {
      if (this.responseContainer) {
        this.responseContainer.remove();
      }
    };
    InlineAIAssist2.prototype.destroy = function() {
      this.unWireEvents();
      this.destroyAndNullify(this.popupObj);
      this.destroyAndNullify(this.footerToolbarEle);
      this.destroyAndNullify(this.mentionPopupObj);
      this.removeAndNullify(this.responseContainer);
      this.removeAndNullify(this.skeletonContainer);
      this.removeAndNullify(this.contentWrapper);
      this.removeAndNullify(this.footer);
      this.removeAndNullify(this.editableTextarea);
      this.removeAndNullify(this.typingIndicatorEl);
      _super.prototype.destroy.call(this);
      if (this.mentionPopupObj) {
        this.mentionPopupObj.element.remove();
      }
      this.responseContainer = null;
      this.skeletonContainer = null;
      this.contentWrapper = null;
      this.footer = null;
      this.editableTextarea = null;
      this.typingIndicatorEl = null;
      this.sendToolbarItem = null;
      this.responseOptionsData = [];
      this.commandOptionsData = [];
      this.prompts = [];
      this.responseContainerCreated = false;
      this.isResponseRequested = false;
      this.isStopRequested = false;
      this.inlineToolbarSettings = this.responseSettings = this.commandSettings = {};
      if (this.cssClass) {
        removeClass([this.element], this.cssClass.split(" "));
      }
      removeClass([this.element], ["e-inline-ai-assist"]);
      this.element.classList.remove("e-rtl");
    };
    InlineAIAssist2.prototype.onPropertyChanged = function(newProp, oldProp) {
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "popupWidth":
          case "popupHeight":
            if (this.popupObj) {
              this.popupObj.width = formatUnit(this.popupWidth);
              this.popupObj.height = formatUnit(this.popupHeight);
            }
            break;
          case "prompt":
            if (!this.editorTemplate) {
              this.editableTextarea.innerText = this.prompt;
              this.refreshTextareaUI();
              this.pushToUndoStack(this.prompt);
            }
            break;
          case "locale":
            this.l10n.setLocale(this.locale);
            break;
          case "placeholder":
            if (this.editableTextarea) {
              this.editableTextarea.setAttribute("placeholder", this.placeholder);
            }
            break;
          case "cssClass":
            this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
            break;
          case "target":
            this.resolveTargetElement();
            break;
          case "relateTo":
            this.resolveRelateToElement();
            if (this.popupObj) {
              this.popupObj.setProperties({ relateTo: this.relateToEl }, true);
              this.popupObj.refreshPosition();
            }
            break;
          case "inlineToolbarSettings":
            if (newProp.inlineToolbarSettings.items) {
              this.updateFooterToolbar();
            }
            if (newProp.inlineToolbarSettings.toolbarPosition) {
              this.updateFooterType(newProp.inlineToolbarSettings.toolbarPosition);
            }
            break;
          case "responseSettings":
            if (newProp.responseSettings.items) {
              this.setResponsePopupData();
            }
            break;
          case "commandSettings":
            if (newProp.commandSettings) {
              this.setCommandPopupData();
              if (this.mentionPopupObj && this.mentionPopupObj.element.classList.contains("e-popup-open")) {
                this.showCommandMenuPopup();
              }
            }
            break;
          case "responseTemplate": {
            if (this.responseContainerCreated && this.prompts.length > 0) {
              var outputContainer = this.element.querySelector(".e-output-container");
              if (outputContainer) {
                outputContainer.innerHTML = "";
                this.renderResponseWithTemplate(this.prompts[this.prompts.length - 1].response);
              }
            }
            break;
          }
          case "editorTemplate": {
            this.updateEditorTemplate();
            break;
          }
          case "enableStreaming": {
            this.enableStreaming = newProp.enableStreaming;
            break;
          }
          case "zIndex":
            if (this.popupObj) {
              this.popupObj.zIndex = newProp.zIndex;
              this.popupObj.dataBind();
            }
            break;
          case "enableRtl":
            this.element.classList[this.enableRtl ? "add" : "remove"]("e-rtl");
            if (this.footerToolbarEle) {
              this.footerToolbarEle.enableRtl = this.enableRtl;
              this.footerToolbarEle.dataBind();
            }
            break;
        }
      }
    };
    __decorate6([
      Property("body")
    ], InlineAIAssist2.prototype, "target", void 0);
    __decorate6([
      Property("")
    ], InlineAIAssist2.prototype, "relateTo", void 0);
    __decorate6([
      Property("Popup")
    ], InlineAIAssist2.prototype, "responseMode", void 0);
    __decorate6([
      Property("")
    ], InlineAIAssist2.prototype, "cssClass", void 0);
    __decorate6([
      Property("")
    ], InlineAIAssist2.prototype, "prompt", void 0);
    __decorate6([
      Collection([], PromptResponse)
    ], InlineAIAssist2.prototype, "prompts", void 0);
    __decorate6([
      Property("Ask or generate AI content..")
    ], InlineAIAssist2.prototype, "placeholder", void 0);
    __decorate6([
      Property("en-US")
    ], InlineAIAssist2.prototype, "locale", void 0);
    __decorate6([
      Property("auto")
    ], InlineAIAssist2.prototype, "popupHeight", void 0);
    __decorate6([
      Property("400px")
    ], InlineAIAssist2.prototype, "popupWidth", void 0);
    __decorate6([
      Complex({ commands: [], popupHeight: "", popupWidth: "" }, CommandSettings)
    ], InlineAIAssist2.prototype, "commandSettings", void 0);
    __decorate6([
      Complex({ items: [] }, ResponseSettings)
    ], InlineAIAssist2.prototype, "responseSettings", void 0);
    __decorate6([
      Complex({ toolbarPosition: "Inline", items: [] }, InlineToolbarSettings)
    ], InlineAIAssist2.prototype, "inlineToolbarSettings", void 0);
    __decorate6([
      Property("")
    ], InlineAIAssist2.prototype, "responseTemplate", void 0);
    __decorate6([
      Property("")
    ], InlineAIAssist2.prototype, "editorTemplate", void 0);
    __decorate6([
      Property(1e3)
    ], InlineAIAssist2.prototype, "zIndex", void 0);
    __decorate6([
      Property(false)
    ], InlineAIAssist2.prototype, "enableRtl", void 0);
    __decorate6([
      Event()
    ], InlineAIAssist2.prototype, "promptRequest", void 0);
    __decorate6([
      Event()
    ], InlineAIAssist2.prototype, "open", void 0);
    __decorate6([
      Event()
    ], InlineAIAssist2.prototype, "close", void 0);
    InlineAIAssist2 = __decorate6([
      NotifyPropertyChanges
    ], InlineAIAssist2);
    return InlineAIAssist2;
  })(AIAssistBase)
);

// node_modules/@syncfusion/ej2-angular-interactive-chat/fesm2020/syncfusion-ej2-angular-interactive-chat.mjs
var _c0 = ["footerTemplate"];
var _c1 = ["promptItemTemplate"];
var _c2 = ["responseItemTemplate"];
var _c3 = ["promptSuggestionItemTemplate"];
var _c4 = ["bannerTemplate"];
var _c5 = ["ejs-aiassistview", ""];
var _c6 = ["*"];
var _c7 = ["suggestionTemplate"];
var _c8 = ["emptyChatTemplate"];
var _c9 = ["messageTemplate"];
var _c10 = ["typingUsersTemplate"];
var _c11 = ["timeBreakTemplate"];
var _c12 = ["previewTemplate"];
var _c13 = ["attachmentTemplate"];
var _c14 = ["ejs-chatui", ""];
var _c15 = ["editorTemplate"];
var _c16 = ["responseTemplate"];
var input$1 = ["iconCss", "name", "type", "viewTemplate"];
var outputs$4 = [];
var ViewDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$4);
    this.directivePropList = input$1;
  }
};
ViewDirective.ɵfac = function ViewDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ViewDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ViewDirective.ɵdir = ɵɵdefineDirective({
  type: ViewDirective,
  selectors: [["e-view"]],
  inputs: {
    iconCss: "iconCss",
    name: "name",
    type: "type",
    viewTemplate: "viewTemplate"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-aiassistview>e-views>e-view",
      inputs: input$1,
      outputs: outputs$4,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ViewsDirective = class extends ArrayBase {
  constructor() {
    super("views");
  }
};
ViewsDirective.ɵfac = function ViewsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ViewsDirective)();
};
ViewsDirective.ɵdir = ɵɵdefineDirective({
  type: ViewsDirective,
  selectors: [["e-views"]],
  contentQueries: function ViewsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ViewDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-aiassistview>e-views",
      queries: {
        children: new ContentChildren(ViewDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$2 = ["activeView", "attachmentSettings", "bannerTemplate", "cssClass", "enableAttachments", "enablePersistence", "enableRtl", "enableScrollToBottom", "enableStreaming", "footerTemplate", "footerToolbarSettings", "height", "locale", "prompt", "promptIconCss", "promptItemTemplate", "promptPlaceholder", "promptSuggestionItemTemplate", "promptSuggestions", "promptSuggestionsHeader", "promptToolbarSettings", "prompts", "responseIconCss", "responseItemTemplate", "responseToolbarSettings", "showClearButton", "showHeader", "speechToTextSettings", "toolbarSettings", "views", "width"];
var outputs$3 = ["attachmentRemoved", "attachmentUploadFailure", "attachmentUploadSuccess", "beforeAttachmentUpload", "created", "promptChanged", "promptRequest", "stopRespondingClick", "promptChange"];
var twoWays$2 = ["prompt"];
var AIAssistViewComponent = class AIAssistViewComponent2 extends AIAssistView {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["views"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs$3);
    this.addTwoWay.call(this, twoWays$2);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childViews;
    this.containerContext.ngAfterContentChecked(this);
  }
};
AIAssistViewComponent.ɵfac = function AIAssistViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AIAssistViewComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
AIAssistViewComponent.ɵcmp = ɵɵdefineComponent({
  type: AIAssistViewComponent,
  selectors: [["", "ejs-aiassistview", ""], ["ejs-aiassistview"]],
  contentQueries: function AIAssistViewComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, _c3, 5)(dirIndex, _c4, 5)(dirIndex, ViewsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.promptItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responseItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.promptSuggestionItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bannerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childViews = _t.first);
    }
  },
  inputs: {
    activeView: "activeView",
    attachmentSettings: "attachmentSettings",
    bannerTemplate: "bannerTemplate",
    cssClass: "cssClass",
    enableAttachments: "enableAttachments",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    enableScrollToBottom: "enableScrollToBottom",
    enableStreaming: "enableStreaming",
    footerTemplate: "footerTemplate",
    footerToolbarSettings: "footerToolbarSettings",
    height: "height",
    locale: "locale",
    prompt: "prompt",
    promptIconCss: "promptIconCss",
    promptItemTemplate: "promptItemTemplate",
    promptPlaceholder: "promptPlaceholder",
    promptSuggestionItemTemplate: "promptSuggestionItemTemplate",
    promptSuggestions: "promptSuggestions",
    promptSuggestionsHeader: "promptSuggestionsHeader",
    promptToolbarSettings: "promptToolbarSettings",
    prompts: "prompts",
    responseIconCss: "responseIconCss",
    responseItemTemplate: "responseItemTemplate",
    responseToolbarSettings: "responseToolbarSettings",
    showClearButton: "showClearButton",
    showHeader: "showHeader",
    speechToTextSettings: "speechToTextSettings",
    toolbarSettings: "toolbarSettings",
    views: "views",
    width: "width"
  },
  outputs: {
    attachmentRemoved: "attachmentRemoved",
    attachmentUploadFailure: "attachmentUploadFailure",
    attachmentUploadSuccess: "attachmentUploadSuccess",
    beforeAttachmentUpload: "beforeAttachmentUpload",
    created: "created",
    promptChanged: "promptChanged",
    promptRequest: "promptRequest",
    stopRespondingClick: "stopRespondingClick",
    promptChange: "promptChange"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  attrs: _c5,
  ngContentSelectors: _c6,
  decls: 1,
  vars: 0,
  template: function AIAssistViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], AIAssistViewComponent.prototype, "footerTemplate", void 0);
__decorate([Template()], AIAssistViewComponent.prototype, "promptItemTemplate", void 0);
__decorate([Template()], AIAssistViewComponent.prototype, "responseItemTemplate", void 0);
__decorate([Template()], AIAssistViewComponent.prototype, "promptSuggestionItemTemplate", void 0);
__decorate([Template()], AIAssistViewComponent.prototype, "bannerTemplate", void 0);
AIAssistViewComponent = __decorate([ComponentMixins([ComponentBase])], AIAssistViewComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAssistViewComponent, [{
    type: Component,
    args: [{
      selector: "[ejs-aiassistview], ejs-aiassistview",
      inputs: inputs$2,
      outputs: outputs$3,
      template: `<ng-content ></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childViews: new ContentChild(ViewsDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    footerTemplate: [{
      type: ContentChild,
      args: ["footerTemplate"]
    }],
    promptItemTemplate: [{
      type: ContentChild,
      args: ["promptItemTemplate"]
    }],
    responseItemTemplate: [{
      type: ContentChild,
      args: ["responseItemTemplate"]
    }],
    promptSuggestionItemTemplate: [{
      type: ContentChild,
      args: ["promptSuggestionItemTemplate"]
    }],
    bannerTemplate: [{
      type: ContentChild,
      args: ["bannerTemplate"]
    }]
  });
})();
var AIAssistViewModule = class {
};
AIAssistViewModule.ɵfac = function AIAssistViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AIAssistViewModule)();
};
AIAssistViewModule.ɵmod = ɵɵdefineNgModule({
  type: AIAssistViewModule,
  declarations: [AIAssistViewComponent, ViewDirective, ViewsDirective],
  imports: [CommonModule],
  exports: [AIAssistViewComponent, ViewDirective, ViewsDirective]
});
AIAssistViewModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAssistViewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [AIAssistViewComponent, ViewDirective, ViewsDirective],
      exports: [AIAssistViewComponent, ViewDirective, ViewsDirective]
    }]
  }], null, null);
})();
var AIAssistViewAllModule = class {
};
AIAssistViewAllModule.ɵfac = function AIAssistViewAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AIAssistViewAllModule)();
};
AIAssistViewAllModule.ɵmod = ɵɵdefineNgModule({
  type: AIAssistViewAllModule,
  imports: [CommonModule, AIAssistViewModule],
  exports: [AIAssistViewModule]
});
AIAssistViewAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, AIAssistViewModule], AIAssistViewModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAssistViewAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AIAssistViewModule],
      exports: [AIAssistViewModule],
      providers: []
    }]
  }], null, null);
})();
var input = ["attachedFile", "author", "id", "isForwarded", "isPinned", "mentionUsers", "replyTo", "status", "text", "timeStamp", "timeStampFormat"];
var outputs$2 = [];
var MessageDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$2);
    this.directivePropList = input;
  }
};
MessageDirective.ɵfac = function MessageDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MessageDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
MessageDirective.ɵdir = ɵɵdefineDirective({
  type: MessageDirective,
  selectors: [["e-message"]],
  inputs: {
    attachedFile: "attachedFile",
    author: "author",
    id: "id",
    isForwarded: "isForwarded",
    isPinned: "isPinned",
    mentionUsers: "mentionUsers",
    replyTo: "replyTo",
    status: "status",
    text: "text",
    timeStamp: "timeStamp",
    timeStampFormat: "timeStampFormat"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-chatui>e-messages>e-message",
      inputs: input,
      outputs: outputs$2,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var MessagesDirective = class extends ArrayBase {
  constructor() {
    super("messages");
  }
};
MessagesDirective.ɵfac = function MessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MessagesDirective)();
};
MessagesDirective.ɵdir = ɵɵdefineDirective({
  type: MessagesDirective,
  selectors: [["e-messages"]],
  contentQueries: function MessagesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MessageDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-chatui>e-messages",
      queries: {
        children: new ContentChildren(MessageDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$1 = ["attachmentSettings", "autoScrollToBottom", "cssClass", "emptyChatTemplate", "enableAttachments", "enableCompactMode", "enablePersistence", "enableRtl", "footerTemplate", "headerIconCss", "headerText", "headerToolbar", "height", "loadOnDemand", "locale", "mentionTriggerChar", "mentionUsers", "messageTemplate", "messageToolbarSettings", "messages", "placeholder", "showFooter", "showHeader", "showTimeBreak", "showTimeStamp", "suggestionTemplate", "suggestions", "timeBreakTemplate", "timeStampFormat", "typingUsers", "typingUsersTemplate", "user", "width"];
var outputs$1 = ["attachmentRemoved", "attachmentUploadFailure", "attachmentUploadSuccess", "beforeAttachmentUpload", "created", "mentionSelect", "messageSend", "userTyping"];
var twoWays$1 = [""];
var ChatUIComponent = class ChatUIComponent2 extends ChatUI {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["messages"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs$1);
    this.addTwoWay.call(this, twoWays$1);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childMessages;
    this.containerContext.ngAfterContentChecked(this);
  }
};
ChatUIComponent.ɵfac = function ChatUIComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChatUIComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
ChatUIComponent.ɵcmp = ɵɵdefineComponent({
  type: ChatUIComponent,
  selectors: [["", "ejs-chatui", ""], ["ejs-chatui"]],
  contentQueries: function ChatUIComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c7, 5)(dirIndex, _c0, 5)(dirIndex, _c8, 5)(dirIndex, _c9, 5)(dirIndex, _c10, 5)(dirIndex, _c11, 5)(dirIndex, _c12, 5)(dirIndex, _c13, 5)(dirIndex, MessagesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyChatTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.messageTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.typingUsersTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeBreakTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previewTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.attachmentTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childMessages = _t.first);
    }
  },
  inputs: {
    attachmentSettings: "attachmentSettings",
    autoScrollToBottom: "autoScrollToBottom",
    cssClass: "cssClass",
    emptyChatTemplate: "emptyChatTemplate",
    enableAttachments: "enableAttachments",
    enableCompactMode: "enableCompactMode",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    footerTemplate: "footerTemplate",
    headerIconCss: "headerIconCss",
    headerText: "headerText",
    headerToolbar: "headerToolbar",
    height: "height",
    loadOnDemand: "loadOnDemand",
    locale: "locale",
    mentionTriggerChar: "mentionTriggerChar",
    mentionUsers: "mentionUsers",
    messageTemplate: "messageTemplate",
    messageToolbarSettings: "messageToolbarSettings",
    messages: "messages",
    placeholder: "placeholder",
    showFooter: "showFooter",
    showHeader: "showHeader",
    showTimeBreak: "showTimeBreak",
    showTimeStamp: "showTimeStamp",
    suggestionTemplate: "suggestionTemplate",
    suggestions: "suggestions",
    timeBreakTemplate: "timeBreakTemplate",
    timeStampFormat: "timeStampFormat",
    typingUsers: "typingUsers",
    typingUsersTemplate: "typingUsersTemplate",
    user: "user",
    width: "width"
  },
  outputs: {
    attachmentRemoved: "attachmentRemoved",
    attachmentUploadFailure: "attachmentUploadFailure",
    attachmentUploadSuccess: "attachmentUploadSuccess",
    beforeAttachmentUpload: "beforeAttachmentUpload",
    created: "created",
    mentionSelect: "mentionSelect",
    messageSend: "messageSend",
    userTyping: "userTyping"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  attrs: _c14,
  ngContentSelectors: _c6,
  decls: 1,
  vars: 0,
  template: function ChatUIComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], ChatUIComponent.prototype, "suggestionTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "footerTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "emptyChatTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "messageTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "typingUsersTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "timeBreakTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "previewTemplate", void 0);
__decorate([Template()], ChatUIComponent.prototype, "attachmentTemplate", void 0);
ChatUIComponent = __decorate([ComponentMixins([ComponentBase])], ChatUIComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatUIComponent, [{
    type: Component,
    args: [{
      selector: "[ejs-chatui], ejs-chatui",
      inputs: inputs$1,
      outputs: outputs$1,
      template: `<ng-content ></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childMessages: new ContentChild(MessagesDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    suggestionTemplate: [{
      type: ContentChild,
      args: ["suggestionTemplate"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footerTemplate"]
    }],
    emptyChatTemplate: [{
      type: ContentChild,
      args: ["emptyChatTemplate"]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["messageTemplate"]
    }],
    typingUsersTemplate: [{
      type: ContentChild,
      args: ["typingUsersTemplate"]
    }],
    timeBreakTemplate: [{
      type: ContentChild,
      args: ["timeBreakTemplate"]
    }],
    previewTemplate: [{
      type: ContentChild,
      args: ["previewTemplate"]
    }],
    attachmentTemplate: [{
      type: ContentChild,
      args: ["attachmentTemplate"]
    }]
  });
})();
var ChatUIModule = class {
};
ChatUIModule.ɵfac = function ChatUIModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChatUIModule)();
};
ChatUIModule.ɵmod = ɵɵdefineNgModule({
  type: ChatUIModule,
  declarations: [ChatUIComponent, MessageDirective, MessagesDirective],
  imports: [CommonModule],
  exports: [ChatUIComponent, MessageDirective, MessagesDirective]
});
ChatUIModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatUIModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ChatUIComponent, MessageDirective, MessagesDirective],
      exports: [ChatUIComponent, MessageDirective, MessagesDirective]
    }]
  }], null, null);
})();
var ChatUIAllModule = class {
};
ChatUIAllModule.ɵfac = function ChatUIAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChatUIAllModule)();
};
ChatUIAllModule.ɵmod = ɵɵdefineNgModule({
  type: ChatUIAllModule,
  imports: [CommonModule, ChatUIModule],
  exports: [ChatUIModule]
});
ChatUIAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, ChatUIModule], ChatUIModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatUIAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ChatUIModule],
      exports: [ChatUIModule],
      providers: []
    }]
  }], null, null);
})();
var inputs = ["commandSettings", "cssClass", "editorTemplate", "enablePersistence", "enableRtl", "enableStreaming", "inlineToolbarSettings", "locale", "placeholder", "popupHeight", "popupWidth", "prompt", "prompts", "relateTo", "responseMode", "responseSettings", "responseTemplate", "target", "zIndex"];
var outputs = ["close", "created", "open", "promptRequest"];
var twoWays = [""];
var InlineAIAssistComponent = class InlineAIAssistComponent2 extends InlineAIAssist {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = [""];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs);
    this.addTwoWay.call(this, twoWays);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.containerContext.ngAfterContentChecked(this);
  }
};
InlineAIAssistComponent.ɵfac = function InlineAIAssistComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InlineAIAssistComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
InlineAIAssistComponent.ɵcmp = ɵɵdefineComponent({
  type: InlineAIAssistComponent,
  selectors: [["ejs-inlineaiassist"]],
  contentQueries: function InlineAIAssistComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c15, 5)(dirIndex, _c16, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.responseTemplate = _t.first);
    }
  },
  inputs: {
    commandSettings: "commandSettings",
    cssClass: "cssClass",
    editorTemplate: "editorTemplate",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    enableStreaming: "enableStreaming",
    inlineToolbarSettings: "inlineToolbarSettings",
    locale: "locale",
    placeholder: "placeholder",
    popupHeight: "popupHeight",
    popupWidth: "popupWidth",
    prompt: "prompt",
    prompts: "prompts",
    relateTo: "relateTo",
    responseMode: "responseMode",
    responseSettings: "responseSettings",
    responseTemplate: "responseTemplate",
    target: "target",
    zIndex: "zIndex"
  },
  outputs: {
    close: "close",
    created: "created",
    open: "open",
    promptRequest: "promptRequest"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c6,
  decls: 1,
  vars: 0,
  template: function InlineAIAssistComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], InlineAIAssistComponent.prototype, "editorTemplate", void 0);
__decorate([Template()], InlineAIAssistComponent.prototype, "responseTemplate", void 0);
InlineAIAssistComponent = __decorate([ComponentMixins([ComponentBase])], InlineAIAssistComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineAIAssistComponent, [{
    type: Component,
    args: [{
      selector: "ejs-inlineaiassist",
      inputs,
      outputs,
      template: `<ng-content ></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {}
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    editorTemplate: [{
      type: ContentChild,
      args: ["editorTemplate"]
    }],
    responseTemplate: [{
      type: ContentChild,
      args: ["responseTemplate"]
    }]
  });
})();
var InlineAIAssistModule = class {
};
InlineAIAssistModule.ɵfac = function InlineAIAssistModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InlineAIAssistModule)();
};
InlineAIAssistModule.ɵmod = ɵɵdefineNgModule({
  type: InlineAIAssistModule,
  declarations: [InlineAIAssistComponent],
  imports: [CommonModule],
  exports: [InlineAIAssistComponent]
});
InlineAIAssistModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineAIAssistModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [InlineAIAssistComponent],
      exports: [InlineAIAssistComponent]
    }]
  }], null, null);
})();
var InlineAIAssistAllModule = class {
};
InlineAIAssistAllModule.ɵfac = function InlineAIAssistAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InlineAIAssistAllModule)();
};
InlineAIAssistAllModule.ɵmod = ɵɵdefineNgModule({
  type: InlineAIAssistAllModule,
  imports: [CommonModule, InlineAIAssistModule],
  exports: [InlineAIAssistModule]
});
InlineAIAssistAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, InlineAIAssistModule], InlineAIAssistModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineAIAssistAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InlineAIAssistModule],
      exports: [InlineAIAssistModule],
      providers: []
    }]
  }], null, null);
})();
export {
  AIAssistBase,
  AIAssistView,
  AIAssistViewAllModule,
  AIAssistViewComponent,
  AIAssistViewModule,
  AssistView,
  AssistViewType,
  AttachmentSettings,
  ChatUI,
  ChatUIAllModule,
  ChatUIComponent,
  ChatUIModule,
  CommandItem,
  CommandSettings,
  FileAttachmentSettings,
  FooterToolbarSettings,
  InlineAIAssist,
  InlineAIAssistAllModule,
  InlineAIAssistComponent,
  InlineAIAssistModule,
  InlineToolbarSettings,
  InterActiveChatBase,
  Message,
  MessageDirective,
  MessageReply,
  MessageStatus,
  MessageToolbarSettings,
  MessagesDirective,
  Prompt,
  PromptResponse,
  PromptToolbarSettings,
  ResponseItem,
  ResponseMode,
  ResponseSettings,
  ResponseToolbarSettings,
  SpeechToTextSettings,
  ToolbarItem,
  ToolbarPosition,
  ToolbarSettings,
  User,
  ViewDirective,
  ViewsDirective
};
//# sourceMappingURL=@syncfusion_ej2-angular-interactive-chat.js.map
