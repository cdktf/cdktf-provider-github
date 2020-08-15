// https://www.terraform.io/docs/providers/github/r/data_github_release.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubReleaseConfig extends TerraformMetaArguments {
  readonly owner: string;
  readonly releaseId?: number;
  readonly releaseTag?: string;
  readonly repository: string;
  readonly retrieveBy: string;
}

// Resource

export class DataGithubRelease extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'github_release',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._owner = config.owner;
    this._releaseId = config.releaseId;
    this._releaseTag = config.releaseTag;
    this._repository = config.repository;
    this._retrieveBy = config.retrieveBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asserts_url - computed: true, optional: false, required: true
  public get assertsUrl() {
    return this.getStringAttribute('asserts_url');
  }

  // body - computed: true, optional: false, required: true
  public get body() {
    return this.getStringAttribute('body');
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // draft - computed: true, optional: false, required: true
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // html_url - computed: true, optional: false, required: true
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }

  // prerelease - computed: true, optional: false, required: true
  public get prerelease() {
    return this.getBooleanAttribute('prerelease');
  }

  // published_at - computed: true, optional: false, required: true
  public get publishedAt() {
    return this.getStringAttribute('published_at');
  }

  // release_id - computed: false, optional: true, required: false
  private _releaseId?: number;
  public get releaseId() {
    return this._releaseId;
  }
  public set releaseId(value: number | undefined) {
    this._releaseId = value;
  }

  // release_tag - computed: false, optional: true, required: false
  private _releaseTag?: string;
  public get releaseTag() {
    return this._releaseTag;
  }
  public set releaseTag(value: string | undefined) {
    this._releaseTag = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // retrieve_by - computed: false, optional: false, required: true
  private _retrieveBy: string;
  public get retrieveBy() {
    return this._retrieveBy;
  }
  public set retrieveBy(value: string) {
    this._retrieveBy = value;
  }

  // tarball_url - computed: true, optional: false, required: true
  public get tarballUrl() {
    return this.getStringAttribute('tarball_url');
  }

  // target_commitish - computed: true, optional: false, required: true
  public get targetCommitish() {
    return this.getStringAttribute('target_commitish');
  }

  // upload_url - computed: true, optional: false, required: true
  public get uploadUrl() {
    return this.getStringAttribute('upload_url');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // zipball_url - computed: true, optional: false, required: true
  public get zipballUrl() {
    return this.getStringAttribute('zipball_url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      owner: this._owner,
      release_id: this._releaseId,
      release_tag: this._releaseTag,
      repository: this._repository,
      retrieve_by: this._retrieveBy,
    };
  }
}
