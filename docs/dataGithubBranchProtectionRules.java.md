# `dataGithubBranchProtectionRules` Submodule <a name="`dataGithubBranchProtectionRules` Submodule" id="@cdktf/provider-github.dataGithubBranchProtectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubBranchProtectionRules <a name="DataGithubBranchProtectionRules" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules github_branch_protection_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRules;

DataGithubBranchProtectionRules.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#repository DataGithubBranchProtectionRules#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#id DataGithubBranchProtectionRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#repository DataGithubBranchProtectionRules#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#id DataGithubBranchProtectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubBranchProtectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRules;

DataGithubBranchProtectionRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRules;

DataGithubBranchProtectionRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRules;

DataGithubBranchProtectionRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRules;

DataGithubBranchProtectionRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubBranchProtectionRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGithubBranchProtectionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubBranchProtectionRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubBranchProtectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubBranchProtectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList">DataGithubBranchProtectionRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.rules"></a>

```java
public DataGithubBranchProtectionRulesRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList">DataGithubBranchProtectionRulesRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubBranchProtectionRulesConfig <a name="DataGithubBranchProtectionRulesConfig" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRulesConfig;

DataGithubBranchProtectionRulesConfig.builder()
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
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#repository DataGithubBranchProtectionRules#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#id DataGithubBranchProtectionRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#repository DataGithubBranchProtectionRules#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/branch_protection_rules#id DataGithubBranchProtectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubBranchProtectionRulesRules <a name="DataGithubBranchProtectionRulesRules" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRulesRules;

DataGithubBranchProtectionRulesRules.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubBranchProtectionRulesRulesList <a name="DataGithubBranchProtectionRulesRulesList" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRulesRulesList;

new DataGithubBranchProtectionRulesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.get"></a>

```java
public DataGithubBranchProtectionRulesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGithubBranchProtectionRulesRulesOutputReference <a name="DataGithubBranchProtectionRulesRulesOutputReference" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_branch_protection_rules.DataGithubBranchProtectionRulesRulesOutputReference;

new DataGithubBranchProtectionRulesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRules">DataGithubBranchProtectionRulesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRulesOutputReference.property.internalValue"></a>

```java
public DataGithubBranchProtectionRulesRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubBranchProtectionRules.DataGithubBranchProtectionRulesRules">DataGithubBranchProtectionRulesRules</a>

---



