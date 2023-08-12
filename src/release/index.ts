/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the contents of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#body Release#body}
  */
  readonly body?: string;
  /**
  * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#discussion_category_name Release#discussion_category_name}
  */
  readonly discussionCategoryName?: string;
  /**
  * Set to 'false' to create a published release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#draft Release#draft}
  */
  readonly draft?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to automatically generate the name and body for this release. If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#generate_release_notes Release#generate_release_notes}
  */
  readonly generateReleaseNotes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#id Release#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#name Release#name}
  */
  readonly name?: string;
  /**
  * Set to 'false' to identify the release as a full release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#prerelease Release#prerelease}
  */
  readonly prerelease?: boolean | cdktf.IResolvable;
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#repository Release#repository}
  */
  readonly repository: string;
  /**
  * The name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#tag_name Release#tag_name}
  */
  readonly tagName: string;
  /**
  *  The branch name or commit SHA the tag is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release#target_commitish Release#target_commitish}
  */
  readonly targetCommitish?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release github_release}
*/
export class Release extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_release";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/release github_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'github_release',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.33.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._discussionCategoryName = config.discussionCategoryName;
    this._draft = config.draft;
    this._generateReleaseNotes = config.generateReleaseNotes;
    this._id = config.id;
    this._name = config.name;
    this._prerelease = config.prerelease;
    this._repository = config.repository;
    this._tagName = config.tagName;
    this._targetCommitish = config.targetCommitish;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // discussion_category_name - computed: false, optional: true, required: false
  private _discussionCategoryName?: string; 
  public get discussionCategoryName() {
    return this.getStringAttribute('discussion_category_name');
  }
  public set discussionCategoryName(value: string) {
    this._discussionCategoryName = value;
  }
  public resetDiscussionCategoryName() {
    this._discussionCategoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discussionCategoryNameInput() {
    return this._discussionCategoryName;
  }

  // draft - computed: false, optional: true, required: false
  private _draft?: boolean | cdktf.IResolvable; 
  public get draft() {
    return this.getBooleanAttribute('draft');
  }
  public set draft(value: boolean | cdktf.IResolvable) {
    this._draft = value;
  }
  public resetDraft() {
    this._draft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // generate_release_notes - computed: false, optional: true, required: false
  private _generateReleaseNotes?: boolean | cdktf.IResolvable; 
  public get generateReleaseNotes() {
    return this.getBooleanAttribute('generate_release_notes');
  }
  public set generateReleaseNotes(value: boolean | cdktf.IResolvable) {
    this._generateReleaseNotes = value;
  }
  public resetGenerateReleaseNotes() {
    this._generateReleaseNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateReleaseNotesInput() {
    return this._generateReleaseNotes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prerelease - computed: false, optional: true, required: false
  private _prerelease?: boolean | cdktf.IResolvable; 
  public get prerelease() {
    return this.getBooleanAttribute('prerelease');
  }
  public set prerelease(value: boolean | cdktf.IResolvable) {
    this._prerelease = value;
  }
  public resetPrerelease() {
    this._prerelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prereleaseInput() {
    return this._prerelease;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // target_commitish - computed: false, optional: true, required: false
  private _targetCommitish?: string; 
  public get targetCommitish() {
    return this.getStringAttribute('target_commitish');
  }
  public set targetCommitish(value: string) {
    this._targetCommitish = value;
  }
  public resetTargetCommitish() {
    this._targetCommitish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCommitishInput() {
    return this._targetCommitish;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      discussion_category_name: cdktf.stringToTerraform(this._discussionCategoryName),
      draft: cdktf.booleanToTerraform(this._draft),
      generate_release_notes: cdktf.booleanToTerraform(this._generateReleaseNotes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prerelease: cdktf.booleanToTerraform(this._prerelease),
      repository: cdktf.stringToTerraform(this._repository),
      tag_name: cdktf.stringToTerraform(this._tagName),
      target_commitish: cdktf.stringToTerraform(this._targetCommitish),
    };
  }
}
