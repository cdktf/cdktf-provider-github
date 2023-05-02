# `github_release`

Refer to the Terraform Registory for docs: [`github_release`](https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release).

# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-github.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-github.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release github_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.release.Release.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.release.Release;

Release.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .repository(java.lang.String)
    .tagName(java.lang.String)
//  .body(java.lang.String)
//  .discussionCategoryName(java.lang.String)
//  .draft(java.lang.Boolean)
//  .draft(IResolvable)
//  .generateReleaseNotes(java.lang.Boolean)
//  .generateReleaseNotes(IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .prerelease(java.lang.Boolean)
//  .prerelease(IResolvable)
//  .targetCommitish(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.tagName">tagName</a></code> | <code>java.lang.String</code> | The name of the tag. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Text describing the contents of the tag. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.discussionCategoryName">discussionCategoryName</a></code> | <code>java.lang.String</code> | If specified, a discussion of the specified category is created and linked to the release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.draft">draft</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to create a published release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.generateReleaseNotes">generateReleaseNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to automatically generate the name and body for this release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.prerelease">prerelease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to identify the release as a full release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.targetCommitish">targetCommitish</a></code> | <code>java.lang.String</code> | The branch name or commit SHA the tag is created from. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.release.Release.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.release.Release.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.Release.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.Release.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.release.Release.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.Release.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.Release.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#repository Release#repository}

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-github.release.Release.Initializer.parameter.tagName"></a>

- *Type:* java.lang.String

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#tag_name Release#tag_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.release.Release.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Text describing the contents of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#body Release#body}

---

##### `discussionCategoryName`<sup>Optional</sup> <a name="discussionCategoryName" id="@cdktf/provider-github.release.Release.Initializer.parameter.discussionCategoryName"></a>

- *Type:* java.lang.String

If specified, a discussion of the specified category is created and linked to the release.

The value must be a category that already exists in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#discussion_category_name Release#discussion_category_name}

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-github.release.Release.Initializer.parameter.draft"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to create a published release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#draft Release#draft}

---

##### `generateReleaseNotes`<sup>Optional</sup> <a name="generateReleaseNotes" id="@cdktf/provider-github.release.Release.Initializer.parameter.generateReleaseNotes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to automatically generate the name and body for this release.

If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#generate_release_notes Release#generate_release_notes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.release.Release.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.release.Release.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#name Release#name}

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@cdktf/provider-github.release.Release.Initializer.parameter.prerelease"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to identify the release as a full release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#prerelease Release#prerelease}

---

##### `targetCommitish`<sup>Optional</sup> <a name="targetCommitish" id="@cdktf/provider-github.release.Release.Initializer.parameter.targetCommitish"></a>

- *Type:* java.lang.String

The branch name or commit SHA the tag is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#target_commitish Release#target_commitish}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.release.Release.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.release.Release.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.release.Release.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDiscussionCategoryName">resetDiscussionCategoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDraft">resetDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetGenerateReleaseNotes">resetGenerateReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetPrerelease">resetPrerelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetTargetCommitish">resetTargetCommitish</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.release.Release.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.release.Release.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.release.Release.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.release.Release.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.release.Release.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.release.Release.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.release.Release.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.release.Release.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.release.Release.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.release.Release.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.release.Release.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-github.release.Release.resetBody"></a>

```java
public void resetBody()
```

##### `resetDiscussionCategoryName` <a name="resetDiscussionCategoryName" id="@cdktf/provider-github.release.Release.resetDiscussionCategoryName"></a>

```java
public void resetDiscussionCategoryName()
```

##### `resetDraft` <a name="resetDraft" id="@cdktf/provider-github.release.Release.resetDraft"></a>

```java
public void resetDraft()
```

##### `resetGenerateReleaseNotes` <a name="resetGenerateReleaseNotes" id="@cdktf/provider-github.release.Release.resetGenerateReleaseNotes"></a>

```java
public void resetGenerateReleaseNotes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.release.Release.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-github.release.Release.resetName"></a>

```java
public void resetName()
```

##### `resetPrerelease` <a name="resetPrerelease" id="@cdktf/provider-github.release.Release.resetPrerelease"></a>

```java
public void resetPrerelease()
```

##### `resetTargetCommitish` <a name="resetTargetCommitish" id="@cdktf/provider-github.release.Release.resetTargetCommitish"></a>

```java
public void resetTargetCommitish()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.release.Release.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.release.Release;

Release.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.release.Release.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.release.Release;

Release.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.release.Release.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.release.Release;

Release.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.release.Release.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryNameInput">discussionCategoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draftInput">draftInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotesInput">generateReleaseNotesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prereleaseInput">prereleaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitishInput">targetCommitishInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryName">discussionCategoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draft">draft</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotes">generateReleaseNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prerelease">prerelease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitish">targetCommitish</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.release.Release.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.release.Release.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.release.Release.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.release.Release.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.release.Release.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.release.Release.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.Release.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.Release.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.release.Release.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.release.Release.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.Release.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.Release.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.Release.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.release.Release.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-github.release.Release.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `discussionCategoryNameInput`<sup>Optional</sup> <a name="discussionCategoryNameInput" id="@cdktf/provider-github.release.Release.property.discussionCategoryNameInput"></a>

```java
public java.lang.String getDiscussionCategoryNameInput();
```

- *Type:* java.lang.String

---

##### `draftInput`<sup>Optional</sup> <a name="draftInput" id="@cdktf/provider-github.release.Release.property.draftInput"></a>

```java
public java.lang.Object getDraftInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generateReleaseNotesInput`<sup>Optional</sup> <a name="generateReleaseNotesInput" id="@cdktf/provider-github.release.Release.property.generateReleaseNotesInput"></a>

```java
public java.lang.Object getGenerateReleaseNotesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.release.Release.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.release.Release.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `prereleaseInput`<sup>Optional</sup> <a name="prereleaseInput" id="@cdktf/provider-github.release.Release.property.prereleaseInput"></a>

```java
public java.lang.Object getPrereleaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.release.Release.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-github.release.Release.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `targetCommitishInput`<sup>Optional</sup> <a name="targetCommitishInput" id="@cdktf/provider-github.release.Release.property.targetCommitishInput"></a>

```java
public java.lang.String getTargetCommitishInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.release.Release.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `discussionCategoryName`<sup>Required</sup> <a name="discussionCategoryName" id="@cdktf/provider-github.release.Release.property.discussionCategoryName"></a>

```java
public java.lang.String getDiscussionCategoryName();
```

- *Type:* java.lang.String

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.release.Release.property.draft"></a>

```java
public java.lang.Object getDraft();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generateReleaseNotes`<sup>Required</sup> <a name="generateReleaseNotes" id="@cdktf/provider-github.release.Release.property.generateReleaseNotes"></a>

```java
public java.lang.Object getGenerateReleaseNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.release.Release.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.release.Release.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prerelease`<sup>Required</sup> <a name="prerelease" id="@cdktf/provider-github.release.Release.property.prerelease"></a>

```java
public java.lang.Object getPrerelease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.Release.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-github.release.Release.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `targetCommitish`<sup>Required</sup> <a name="targetCommitish" id="@cdktf/provider-github.release.Release.property.targetCommitish"></a>

```java
public java.lang.String getTargetCommitish();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.release.Release.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-github.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.release.ReleaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.release.ReleaseConfig;

ReleaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .repository(java.lang.String)
    .tagName(java.lang.String)
//  .body(java.lang.String)
//  .discussionCategoryName(java.lang.String)
//  .draft(java.lang.Boolean)
//  .draft(IResolvable)
//  .generateReleaseNotes(java.lang.Boolean)
//  .generateReleaseNotes(IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .prerelease(java.lang.Boolean)
//  .prerelease(IResolvable)
//  .targetCommitish(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.tagName">tagName</a></code> | <code>java.lang.String</code> | The name of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.body">body</a></code> | <code>java.lang.String</code> | Text describing the contents of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName">discussionCategoryName</a></code> | <code>java.lang.String</code> | If specified, a discussion of the specified category is created and linked to the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.draft">draft</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to create a published release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes">generateReleaseNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to automatically generate the name and body for this release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.prerelease">prerelease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to identify the release as a full release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish">targetCommitish</a></code> | <code>java.lang.String</code> | The branch name or commit SHA the tag is created from. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.ReleaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.ReleaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.release.ReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.release.ReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.ReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.ReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.ReleaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.ReleaseConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#repository Release#repository}

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-github.release.ReleaseConfig.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#tag_name Release#tag_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.release.ReleaseConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Text describing the contents of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#body Release#body}

---

##### `discussionCategoryName`<sup>Optional</sup> <a name="discussionCategoryName" id="@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName"></a>

```java
public java.lang.String getDiscussionCategoryName();
```

- *Type:* java.lang.String

If specified, a discussion of the specified category is created and linked to the release.

The value must be a category that already exists in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#discussion_category_name Release#discussion_category_name}

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-github.release.ReleaseConfig.property.draft"></a>

```java
public java.lang.Object getDraft();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to create a published release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#draft Release#draft}

---

##### `generateReleaseNotes`<sup>Optional</sup> <a name="generateReleaseNotes" id="@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes"></a>

```java
public java.lang.Object getGenerateReleaseNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to automatically generate the name and body for this release.

If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#generate_release_notes Release#generate_release_notes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.release.ReleaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.release.ReleaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#name Release#name}

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@cdktf/provider-github.release.ReleaseConfig.property.prerelease"></a>

```java
public java.lang.Object getPrerelease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to identify the release as a full release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#prerelease Release#prerelease}

---

##### `targetCommitish`<sup>Optional</sup> <a name="targetCommitish" id="@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish"></a>

```java
public java.lang.String getTargetCommitish();
```

- *Type:* java.lang.String

The branch name or commit SHA the tag is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/release#target_commitish Release#target_commitish}

---



