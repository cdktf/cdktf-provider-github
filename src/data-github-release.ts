// https://www.terraform.io/docs/providers/github/d/release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#id DataGithubRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#owner DataGithubRelease#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#release_id DataGithubRelease#release_id}
  */
  readonly releaseId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#release_tag DataGithubRelease#release_tag}
  */
  readonly releaseTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#repository DataGithubRelease#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/release#retrieve_by DataGithubRelease#retrieve_by}
  */
  readonly retrieveBy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/release github_release}
*/
export class DataGithubRelease extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_release";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/release github_release} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'github_release',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.29.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._owner = config.owner;
    this._releaseId = config.releaseId;
    this._releaseTag = config.releaseTag;
    this._repository = config.repository;
    this._retrieveBy = config.retrieveBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asserts_url - computed: true, optional: false, required: false
  public get assertsUrl() {
    return this.getStringAttribute('asserts_url');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // prerelease - computed: true, optional: false, required: false
  public get prerelease() {
    return this.getBooleanAttribute('prerelease');
  }

  // published_at - computed: true, optional: false, required: false
  public get publishedAt() {
    return this.getStringAttribute('published_at');
  }

  // release_id - computed: false, optional: true, required: false
  private _releaseId?: number; 
  public get releaseId() {
    return this.getNumberAttribute('release_id');
  }
  public set releaseId(value: number) {
    this._releaseId = value;
  }
  public resetReleaseId() {
    this._releaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
  }

  // release_tag - computed: false, optional: true, required: false
  private _releaseTag?: string; 
  public get releaseTag() {
    return this.getStringAttribute('release_tag');
  }
  public set releaseTag(value: string) {
    this._releaseTag = value;
  }
  public resetReleaseTag() {
    this._releaseTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseTagInput() {
    return this._releaseTag;
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

  // retrieve_by - computed: false, optional: false, required: true
  private _retrieveBy?: string; 
  public get retrieveBy() {
    return this.getStringAttribute('retrieve_by');
  }
  public set retrieveBy(value: string) {
    this._retrieveBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveByInput() {
    return this._retrieveBy;
  }

  // tarball_url - computed: true, optional: false, required: false
  public get tarballUrl() {
    return this.getStringAttribute('tarball_url');
  }

  // target_commitish - computed: true, optional: false, required: false
  public get targetCommitish() {
    return this.getStringAttribute('target_commitish');
  }

  // upload_url - computed: true, optional: false, required: false
  public get uploadUrl() {
    return this.getStringAttribute('upload_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // zipball_url - computed: true, optional: false, required: false
  public get zipballUrl() {
    return this.getStringAttribute('zipball_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      release_id: cdktf.numberToTerraform(this._releaseId),
      release_tag: cdktf.stringToTerraform(this._releaseTag),
      repository: cdktf.stringToTerraform(this._repository),
      retrieve_by: cdktf.stringToTerraform(this._retrieveBy),
    };
  }
}
