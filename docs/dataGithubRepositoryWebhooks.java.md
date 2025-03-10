# `dataGithubRepositoryWebhooks` Submodule <a name="`dataGithubRepositoryWebhooks` Submodule" id="@cdktf/provider-github.dataGithubRepositoryWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryWebhooks <a name="DataGithubRepositoryWebhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks github_repository_webhooks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooks;

DataGithubRepositoryWebhooks.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#id DataGithubRepositoryWebhooks#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#id DataGithubRepositoryWebhooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryWebhooks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooks;

DataGithubRepositoryWebhooks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooks;

DataGithubRepositoryWebhooks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooks;

DataGithubRepositoryWebhooks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooks;

DataGithubRepositoryWebhooks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubRepositoryWebhooks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGithubRepositoryWebhooks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubRepositoryWebhooks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubRepositoryWebhooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryWebhooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList">DataGithubRepositoryWebhooksWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.webhooks"></a>

```java
public DataGithubRepositoryWebhooksWebhooksList getWebhooks();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList">DataGithubRepositoryWebhooksWebhooksList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryWebhooksConfig <a name="DataGithubRepositoryWebhooksConfig" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooksConfig;

DataGithubRepositoryWebhooksConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#id DataGithubRepositoryWebhooks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_webhooks#id DataGithubRepositoryWebhooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryWebhooksWebhooks <a name="DataGithubRepositoryWebhooksWebhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooksWebhooks;

DataGithubRepositoryWebhooksWebhooks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryWebhooksWebhooksList <a name="DataGithubRepositoryWebhooksWebhooksList" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooksWebhooksList;

new DataGithubRepositoryWebhooksWebhooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get"></a>

```java
public DataGithubRepositoryWebhooksWebhooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGithubRepositoryWebhooksWebhooksOutputReference <a name="DataGithubRepositoryWebhooksWebhooksOutputReference" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_webhooks.DataGithubRepositoryWebhooksWebhooksOutputReference;

new DataGithubRepositoryWebhooksWebhooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks">DataGithubRepositoryWebhooksWebhooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.internalValue"></a>

```java
public DataGithubRepositoryWebhooksWebhooks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks">DataGithubRepositoryWebhooksWebhooks</a>

---



